import { Component, h, Element, Host, Prop, State, forceUpdate, Watch, Method } from '@stencil/core'
import { IImageSizes, FileSizeUnit, FileSizeUnits } from './types'
import { Errors } from './errors'
import { createError } from '../../../utils/utils'

@Component({
    tag: 'bcm-upload',
    styleUrl: 'upload.scss',
    shadow: true
})
export class BcmUpload {
    /**
     * Private variables
     */
    private fileInput: HTMLInputElement
    private imageTypes: string = 'png|jpg|jpeg|gif|bmp'
    private componentDisabled: boolean = false

    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component States
     */
    @State() files: Array<{image: boolean, thumbnail: string, source: File}> = []
    @State() types: Array<string> = []
    @State() maxFileSizeValue: number = 1024
    @State() maxFileSizeUnit: FileSizeUnit = 'kb'

    
    /**
     * Component Properties
     */
    @Prop({ 
        attribute: 'accept-types' 
    }) acceptTypes: string = '' // string format: 'jpg|png|xml
    @Prop({ 
        attribute: 'multiple-file' 
    }) multipleFile: number = 1
    @Prop({ 
        attribute: 'max-file-size' 
    }) maxFileSize: string = (this.maxFileSizeValue + this.maxFileSizeUnit) as string
    @Prop({ 
        attribute: 'max-image-width' 
    }) maxImageWidth: number = Infinity
    @Prop({ 
        attribute: 'max-image-height' 
    }) maxImageHeight: number = Infinity
    @Prop({ 
        attribute: 'min-image-width' 
    }) minImageWidth: number = 1
    @Prop({ 
        attribute: 'min-image-height' 
    }) minImageHeight: number = 1
    @Prop({ 
        attribute: 'show-thumbnail' 
    }) showThumbnail: boolean = false

    /**
     * @ComponentMethod
     */
    componentWillLoad() {
        this.parseTypes(this.acceptTypes)
        this.parseMaxFileSize(this.maxFileSize)
    }

    /**
     * @desc Parse accepted file size
     * @returns {void}
     */
    @Watch('acceptTypes')
    parseTypes(newValue: string) {
        if (!newValue) return
        this.types = newValue.split('|')
    }

    /**
     * @desc Extract file size unit from
     * size string eg: '500mb' -> mb
     * @returns {void}
     */
    @Watch('maxFileSize')
    parseMaxFileSize(newValue: string) {
        if (!newValue) return
        const unit = newValue.replace(/[0-9]/g, '').trim()
        const value = newValue.replace(/\D/g, '')

        // Validate size unit
        // #
        if (unit && unit in FileSizeUnits) {
            this.maxFileSizeUnit = unit as FileSizeUnit
        }
        else {
            console.error(createError(
                Errors.INVALID_FILE_SIZE_UNIT, 
                Object.keys(FileSizeUnits).join('|')
            ))

            this.componentDisabled = true
            return
        }

        // Validate size
        // #
        if (value) {
            this.maxFileSizeValue = Number(value)
        }
        else {
            console.error(Errors.INVALID_FILE_SIZE)
            return
        }
    }

    /**
     * @desc
     */
    handleClick() {
        this.fileInput.value = null
    }

    /**
     * @desc
     */
    handleFiles() {
        const files = Array.from(this.fileInput.files).slice(0, this.multipleFile)

        if (this.componentDisabled) 
            return

        // Add all selected user files
        // to files array if not exist
        Array.from(files).forEach(userFile => {
            let exist: boolean = false
            let type = userFile.name.split('.').pop()
            let isImage = this.imageTypes.indexOf(type) !== -1

            // Check max file limit
            // #
            if (this.files.length == this.multipleFile)
                return

            // Check file type
            // #
            if (this.types.length > 0 && this.types.indexOf(type) === -1)
                return

            this.files.map(file => {
                // Check existance
                // #
                file.source.name === userFile.name && (exist = true)
            })

            if (!exist) {
                const idx = this.files.push({
                    image: isImage,
                    source: userFile,
                    thumbnail: null
                }) - 1

                isImage && this.createItemThumbnail(idx);
            }
        })

        // TODO: find alternative way to do this
        forceUpdate(this.el)
    }

    /**
     * 
     * @param src 
     */
    async getImageSizes(src: string): Promise<IImageSizes> {
        return new Promise((resolve) => {
            const image = new Image()

            image.onload = () => resolve({
                width: image.width,
                height: image.height
            })
            image.src = src
        })
    }


    /**
     * @desc
     */
    async validateImage(src: string): Promise<{errors?: Array<string>}> {
        const errors: Array<string> = []
        const sizes: IImageSizes = await this.getImageSizes(src)

        sizes.width > this.maxImageWidth && errors.push(
            createError(Errors.INVALID_MAX_IMAGE_WIDTH, this.maxImageWidth)
        )
        sizes.width < this.minImageWidth && errors.push(
            createError(Errors.INVALID_MIN_IMAGE_WIDTH, this.minImageWidth)
        )
        sizes.height > this.maxImageHeight && errors.push(
            createError(Errors.INVALID_MAX_IMAGE_HEIGHT, this.maxImageHeight)
        )
        sizes.height < this.minImageHeight && errors.push(
            createError(Errors.INVALID_MIN_IMAGE_HEIGHT, this.minImageHeight)
        )
        return { errors }
    }

    /**
     * @desc
     * @param idx 
     */
    async createItemThumbnail(idx: number) {
        const reader: FileReader = new FileReader()
        const file: File = this.files[idx].source

        reader.onloadend = async (e: any) => {
            const imageSrc = e.target.result
            const validate = await this.validateImage(imageSrc)
            
            if (validate.errors.length === 0) {
                this.files[idx].thumbnail = (imageSrc)
                forceUpdate(this.el)
            }
            else {
                this.remove(idx)
                validate.errors.forEach(error => console.error(error))
            }
            
        }
        reader.readAsDataURL(file)
    }

    /**
     * @desc
     * @param idx 
     */
    remove(idx: number) {
        this.files.splice(idx, 1)
        forceUpdate(this.el)
    }
    
    @Method()
    async data() {
        const form = new FormData()
        this.files.map(file => form.append(
            'userFiles[]',
            file.source,
            file.source.name
        ))
        
        console.log(this)
        return form
    }

    render() {
        const { files, multipleFile } = this

        return (
            <Host>
                <bcm-button kind="ghost">
                    <input 
                        type="file" 
                        id="file" 
                        class="input"
                        multiple={multipleFile > 1}
                        ref={el => this.fileInput = el} 
                        onClick={() => this.handleClick()}
                        onChange={() => this.handleFiles()}
                    />
                    <label htmlFor="file">
                        <bcm-icon icon="upload"></bcm-icon>
                        Upload
                    </label>
                </bcm-button>

                <div class="files">
                    {files.length > 0 && files.map((file, idx) => (
                        <div class={'file ' + (file.image ? 'with-thumbnail' : '')}>

                            { !file.image && (
                                <bcm-icon icon="paper-clip" size={16} color="grey-7"></bcm-icon>
                            )}

                            { file.image && (file.thumbnail && (
                                <div
                                    class="thumbnail"
                                    style={{backgroundImage: 'url('+ file.thumbnail +')'}}>
                                </div>
                            ))}

                            {file.source.name}

                            <bcm-icon
                                icon="close"
                                color="grey-10"
                                class="remove-btn"
                                onClick={() => this.remove(idx)}>
                            </bcm-icon>
                        </div>
                    ))}
                </div>
            </Host>
        )
    }
}

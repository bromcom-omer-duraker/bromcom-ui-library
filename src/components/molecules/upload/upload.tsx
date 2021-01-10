import { Component, h, Element, Host, Prop, State, forceUpdate, Watch, Method } from '@stencil/core'

@Component({
    tag: 'bcm-upload',
    styleUrl: 'upload.scss',
    shadow: true
})
export class BcmUpload {
    private fileInput: HTMLInputElement

    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component States
     */
    @State() files: Array<File> = []
    @State() types: Array<string> = []
    
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
    }) maxFileSize: number = 1024 // in Kilobytes
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
    }

    /**
     * @desc
     * @param newValue 
     * @returns {void}
     */
    @Watch('acceptTypes')
    parseTypes(newValue: string) {
        if (newValue) {
            this.types = newValue.split('|')
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

        // Add all selected user files
        // to files array if not exist
        Array.from(files).forEach(userFile => {
            let exist: boolean = false

            // Check file type
            // #
            if (this.types.length > 0 && this.types.indexOf(userFile.name.split('.').pop()) === -1)
                return;

            this.files.map(file => {
                // Check existance
                // #
                file.name === userFile.name && (exist = true)
            })

            !exist && this.files.push(userFile)
        })

        forceUpdate(this.el)
    }

    /**
     * @desc
     */
    remove(idx: number) {
        console.log(idx)
    }

    @Method()
    async data() {
        const form = new FormData()
        this.files.map(file => form.append('userFiles[]', file, file.name))
        return form
    }

    render() {
        const { files } = this

        return (
            <Host>
                <bcm-button kind="ghost">
                    <input 
                        type="file" 
                        id="file" 
                        class="input"
                        multiple={this.multipleFile > 1}
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
                        <div class="file">
                            <bcm-icon icon="paper-clip" size={16} color="grey-7"></bcm-icon>
                            {file.name}
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

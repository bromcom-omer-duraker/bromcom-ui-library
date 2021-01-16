import { Component, Prop, h, Element, getAssetPath, Host, Watch, State } from '@stencil/core'
import cs from 'classnames'
import { ImageProps, SizeProps, SizeProp } from './types'

@Component({
    tag: 'bcm-empty',
    styleUrl: 'empty.scss',
    shadow: true,
    assetsDirs: ['static']    
})
export class BcmEmpty {
    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'image' }) _image: ImageProps = ImageProps.default;
    @Prop() size: SizeProp = SizeProps.medium;
    @Prop() text: string;

    /**
     * Component States
     */
    @State() image: string;

     /**
     * @ComponentMethod
     */
    componentWillLoad() {
        this.parseImage(this._image)
    }

     /**
     * @desc
     * @param newValue 
     * @returns {void}
     */
    @Watch('_image')
    parseImage(newValue: string) {
        if (newValue) {
            newValue in ImageProps
                ? this.image = ImageProps[newValue]
                : this.image = ImageProps.default 
                
        }
    }

    render() {
        const classes = cs(
            'empty',
            {
                [this.size]: this.size
            }
        )

        return (
            <Host>
                <div class={classes}>
                    <img src={getAssetPath(`./static/${this.image}`)} />
                    <div class="content">
                        {
                            this.text && (
                                <span class="text">{this.text}</span>
                            )
                        }
                        <slot />
                    </div>
                </div>
            </Host>
        )
    }
}

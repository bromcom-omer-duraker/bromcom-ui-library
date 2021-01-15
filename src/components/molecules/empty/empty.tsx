import { Component, Prop, h, Element, getAssetPath, Host, Watch, State } from '@stencil/core'
import { ImageProps } from './types'

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
        return (
            <Host>
                <img src={getAssetPath(`./static/${this.image}`)} />
                <div class="content">
                    <slot />
                </div>
            </Host>
        )
    }
}

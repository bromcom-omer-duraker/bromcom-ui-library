import { Element, Component, Prop, State, h } from '@stencil/core'; 
import { icons } from '../../../assets/icons';
import { extractColor } from '../../../utils/utils';
import colors from '../../../global/variables/colors';



/**
 * 'type' prop types
 */
export declare type TypePropOptions = 'default' | 'fill' | 'outlined' | 'multicolor';

/**
 * 'size' prop types
 */
export declare type SizePropOptions = SizePropPredefinedValues | number;

/**
 * 'size' prop predefined values
 */
enum SizePropPredefinedValues { 
    large = '48', 
    medium = '24', 
    default = '16', 
    small = '12', 
    xsmall ='8' 
}

const defaultIconSize = 16;

/**
 * 'size' prop values
 */

@Component({
    tag: 'bcm-icon',
    styleUrl: 'icon.scss',
    shadow: true
})
export class BcmIcon {
    // Host Element
    @Element() el: HTMLElement;

    // Props
    @Prop() type: TypePropOptions = 'default';
    @Prop() size: SizePropOptions = defaultIconSize;
    @Prop() icon: string;
    @Prop() color: string = 'prime-blue-6';

    // States
    @State() _icon: string;
    @State() _size: number;
    @State() wrapperStyle: {[key: string]: any} = {};

    /**
     * @desc
     * @param svgTemplate -
     * @returns {string | SVGElement}
     */
    setIconColor(svgTemplate: string): string {
        const color = extractColor(colors, this.color);
        let fillPattern: RegExp = /(<path [\S\s]*?fill=")[^"]+("[\S\s]*?>)/gmi;

        // Replace fill colors with given prop
        // -->
        if (this.type == 'multicolor') {
            // multicolor icon
        }
        else {
            svgTemplate = svgTemplate.replace(fillPattern, "$1"+ color +"$2");
        }

        return svgTemplate;
    }

    /**
     * @desc
     * @param svgTemplate 
     * @returns {string | SVGElement}
     */
    setIconSize(svgTemplate: string): string {
        let regPattern: string = '(<svg [\\S\\s]*?[attribute]=\")[^\"]+(\"[\\S\\s]*?>)';

        for (let attribute of ['width', 'height']) {
            let replaceReg = new RegExp(regPattern.replace('[attribute]', attribute), 'gmi');

            // Replace svg size based on 100%
            // -->
            svgTemplate = svgTemplate.replace(replaceReg, "$1100%$2");
        }
        return svgTemplate;
    }

    /**
     * @desc
     * @returns {void}
     */
    setWrapperSize(): void {
        const size = this._size + 'px';

        for (let attribute of [
            'width', 
            'height',
            'min-width',
            'min-height'
        ]) {
            this.wrapperStyle[attribute] = size;
        }
        // Also we need to change host style
        // -->
        this.el.style.cssText = `width: ${size}; height: ${size}`;
    }

    /**
     * @ComponentMethod
     */
    componentWillRender() {
        let iconbase64: string;
        let newIcon: string;


        this._size = (SizePropPredefinedValues[this.size] || this.size);

        if (!icons[this.icon]) {
            console.warn('Target icon is not found(!)')
        }
        else if (!icons[this.icon][this.type]) {
            console.warn('Target icon type is not found(!)')
        }
        else if (!icons[this.icon][this.type][this._size]) {
            if(!icons[this.icon][this.type][defaultIconSize]) {
                console.warn('Target icon default size is not found(!)')
            }
            else {
                iconbase64 = icons[this.icon][this.type][defaultIconSize];
            }
        }
        else {
            iconbase64 = icons[this.icon][this.type][this._size];
        }
        
        if (!iconbase64) {
            return;
        }

        // Convert bas64 to SVG string
        // #
        newIcon = atob(iconbase64.split('data:image/svg+xml;base64,')[1]);

        this.setWrapperSize();
        newIcon = this.setIconSize(newIcon);
        newIcon = this.setIconColor(newIcon);

        this._icon = newIcon;
    }

    render() {
        if (this._icon) {
            return(
                <span 
                    style={this.wrapperStyle} 
                    innerHTML={this._icon}>
                </span>
            )
        }
    }
}
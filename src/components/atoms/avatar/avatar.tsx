import { Component, Prop, h, State, Listen } from '@stencil/core';
import cs from 'classnames'

const types = {
    normal: 'div',
    button: 'button'
}

const iconSizes = {
    small: '16',
    medium: '20',
    large: '24',
}

@Component({
    tag: 'bcm-avatar',
    styleUrl: 'avatar.scss',
    scoped: true
})
export class BcmAvatar {

    @Prop() plate: 'ellipse' | 'square' = 'ellipse'
    @Prop() size: 'small' | 'medium' | 'large' | string = 'medium'
    @Prop() image: string
    @Prop() name: string
    @Prop() type: 'normal' | 'button' = 'normal'

    @State() isFallback: boolean = false

    @Listen('error', { capture: true })
    handleError() {
        this.isFallback = true
    }

    getCustomSizes(customSize: string) {
        return {
            textSize: Math.round(parseInt(customSize) / 3),
            iconSize: Math.round(parseInt(customSize) / 2),
        }
    }

    getIcon(size: string, custom: boolean) {

        const currentSize = custom ? this.getCustomSizes(size).iconSize : iconSizes[size]

        return (
            <bcm-icon icon="user" type="outlined" color="grey-1" size={currentSize}></bcm-icon>
        )
    }

    getFirstLetters(name: string) {
        const splitted = name.split(' ')

        if (splitted.length === 1) return splitted[0].substring(0,2)

        return splitted[0].charAt(0) + splitted[splitted.length - 1].charAt(0)
    }

    render() {

        const isCustom = !Object.keys(iconSizes).includes(this.size)
        const Wrapper = types[this.type]

        const classes = cs(
            'avatar',
            'size-2',
            this.plate,
            {
                [`${this.size}`]: !isCustom
            }
        )

        const customStyles = {
            width: this.size + 'px',
            height: this.size + 'px',
            fontSize: this.getCustomSizes(this.size).textSize + 'px'
        }

        return (
            <Wrapper class={classes} style={isCustom && customStyles}>
                {
                    this.isFallback ? this.getIcon(this.size, isCustom)
                    : this.image ? <img src={this.image} alt="Avatar" />
                    : this.name ? this.getFirstLetters(this.name)
                    : this.getIcon(this.size, isCustom)
                }
           </Wrapper>
        )
    }
}

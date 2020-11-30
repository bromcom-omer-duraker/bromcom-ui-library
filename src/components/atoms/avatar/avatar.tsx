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
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() custom: number
    @Prop() image: string
    @Prop() name: string
    @Prop() type: 'normal' | 'button' = 'normal'

    @State() isFallback: boolean = false

    @Listen('error', { capture: true })
    handleError() {
        this.isFallback = true
    }

    getCustomSizes(customSize: number) {
        return {
            textSize: Math.round(customSize / 3),
            iconSize: Math.round(customSize / 2),
        }
    }

    getIcon(size: string, custom?: number) {

        const currentSize = custom ? this.getCustomSizes(custom).iconSize : size

        return (
            <svg width={currentSize} height={currentSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1212 17.8969C19.679 16.8496 19.0374 15.8984 18.2321 15.0961C17.4292 14.2915 16.4781 13.65 15.4313 13.207C15.4219 13.2023 15.4126 13.2 15.4032 13.1953C16.8633 12.1406 17.8126 10.4227 17.8126 8.48438C17.8126 5.27344 15.211 2.67188 12.0001 2.67188C8.78912 2.67188 6.18756 5.27344 6.18756 8.48438C6.18756 10.4227 7.13678 12.1406 8.59693 13.1977C8.58756 13.2023 8.57818 13.2047 8.56881 13.2094C7.51881 13.6523 6.57662 14.2875 5.76803 15.0984C4.96344 15.9013 4.32194 16.8524 3.87896 17.8992C3.44378 18.924 3.20908 20.0228 3.18756 21.1359C3.18693 21.161 3.19132 21.1858 3.20046 21.2091C3.20961 21.2324 3.22332 21.2537 3.24079 21.2716C3.25826 21.2895 3.27915 21.3037 3.30221 21.3134C3.32527 21.3231 3.35004 21.3281 3.37506 21.3281H4.78131C4.88443 21.3281 4.96646 21.2461 4.96881 21.1453C5.01568 19.3359 5.74225 17.6414 7.02662 16.357C8.35553 15.0281 10.1204 14.2969 12.0001 14.2969C13.8797 14.2969 15.6446 15.0281 16.9735 16.357C18.2579 17.6414 18.9844 19.3359 19.0313 21.1453C19.0337 21.2484 19.1157 21.3281 19.2188 21.3281H20.6251C20.6501 21.3281 20.6749 21.3231 20.6979 21.3134C20.721 21.3037 20.7419 21.2895 20.7593 21.2716C20.7768 21.2537 20.7905 21.2324 20.7997 21.2091C20.8088 21.1858 20.8132 21.161 20.8126 21.1359C20.7891 20.0156 20.5571 18.9258 20.1212 17.8969ZM12.0001 12.5156C10.9243 12.5156 9.91178 12.0961 9.15006 11.3344C8.38834 10.5727 7.96881 9.56016 7.96881 8.48438C7.96881 7.40859 8.38834 6.39609 9.15006 5.63437C9.91178 4.87266 10.9243 4.45312 12.0001 4.45312C13.0758 4.45312 14.0883 4.87266 14.8501 5.63437C15.6118 6.39609 16.0313 7.40859 16.0313 8.48438C16.0313 9.56016 15.6118 10.5727 14.8501 11.3344C14.0883 12.0961 13.0758 12.5156 12.0001 12.5156Z" fill="currentColor"/>
            </svg>
        )
    }

    getFirstLetters(name: string) {
        const splitted = name.split(' ')

        if (splitted.length === 1) return splitted[0].substring(0,2)

        return splitted[0].charAt(0) + splitted[splitted.length - 1].charAt(0)
    }

    render() {

        const Wrapper = types[this.type]

        const classes = cs(
            'avatar',
            'size-2',
            this.plate,
            this.size
        )

        const customStyles = {
            width: this.custom + 'px',
            height: this.custom + 'px',
            fontSize: this.getCustomSizes(this.custom).textSize + 'px'
        }

        return (
            <Wrapper class={classes} style={this.custom && customStyles}>
                {
                    this.isFallback ? this.getIcon(iconSizes[this.size], this.custom)
                    : this.image ? <img src={this.image} alt="Avatar" />
                    : this.name ? this.getFirstLetters(this.name)
                    : this.getIcon(iconSizes[this.size], this.custom)
                }
           </Wrapper>
        )
    }
}

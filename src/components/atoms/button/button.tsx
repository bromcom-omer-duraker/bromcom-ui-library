import { Component, Prop, Element, h } from '@stencil/core';
import cs from 'classnames'
// import { getElementAttributes } from '../../../utils/utils'

@Component({
    tag: 'bcm-button',
    styleUrl: 'buttons.scss',
    shadow: true
})
export class BcmButton {

    @Prop() kind: 'solid' | 'ghost' = 'solid'
    @Prop() size: 'small' | 'medium' | 'large'= 'medium'
    @Prop() disabled: boolean = false
    @Prop() outline: boolean = false
    @Prop() icon: string;
    @Prop() iconPosition: 'left' | 'right' = 'left'
    @Prop() iconOnly: boolean = false

    @Element() host: HTMLButtonElement;

    handleClick() {
        console.log('working')
    }

    getIcon(iconOnly?: boolean) {
        return (
            <span class={iconOnly ? '' : this.iconPosition}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.123 8.96553C10.1084 8.94685 10.0897 8.93175 10.0684 8.92136C10.0471 8.91098 10.0237 8.90558 9.99994 8.90558C9.97622 8.90558 9.95282 8.91098 9.9315 8.92136C9.91018 8.93175 9.89151 8.94685 9.87689 8.96553L7.6894 11.7331C7.67136 11.7561 7.66017 11.7838 7.65711 11.8129C7.65404 11.842 7.65922 11.8713 7.67206 11.8976C7.6849 11.9239 7.70487 11.946 7.72969 11.9615C7.75452 11.977 7.7832 11.9851 7.81244 11.9851H9.2558V16.7195C9.2558 16.8054 9.32611 16.8757 9.41205 16.8757H10.5839C10.6699 16.8757 10.7402 16.8054 10.7402 16.7195V11.987H12.1874C12.3183 11.987 12.3906 11.8366 12.3105 11.7351L10.123 8.96553Z" fill="currentColor"/>
                    <path d="M15.8477 7.16211C14.9531 4.80273 12.6738 3.125 10.0039 3.125C7.33398 3.125 5.05469 4.80078 4.16016 7.16016C2.48633 7.59961 1.25 9.125 1.25 10.9375C1.25 13.0957 2.99805 14.8438 5.1543 14.8438H5.9375C6.02344 14.8438 6.09375 14.7734 6.09375 14.6875V13.5156C6.09375 13.4297 6.02344 13.3594 5.9375 13.3594H5.1543C4.49609 13.3594 3.87695 13.0977 3.41602 12.623C2.95703 12.1504 2.71289 11.5137 2.73438 10.8535C2.75195 10.3379 2.92773 9.85352 3.24609 9.44531C3.57227 9.0293 4.0293 8.72656 4.53711 8.5918L5.27734 8.39844L5.54883 7.68359C5.7168 7.23828 5.95117 6.82227 6.24609 6.44531C6.53725 6.07169 6.88214 5.74326 7.26953 5.4707C8.07227 4.90625 9.01758 4.60742 10.0039 4.60742C10.9902 4.60742 11.9355 4.90625 12.7383 5.4707C13.127 5.74414 13.4707 6.07227 13.7617 6.44531C14.0566 6.82227 14.291 7.24023 14.459 7.68359L14.7285 8.39648L15.4668 8.5918C16.5254 8.87695 17.2656 9.83984 17.2656 10.9375C17.2656 11.584 17.0137 12.1934 16.5566 12.6504C16.3325 12.8758 16.0659 13.0546 15.7722 13.1763C15.4785 13.298 15.1636 13.3602 14.8457 13.3594H14.0625C13.9766 13.3594 13.9062 13.4297 13.9062 13.5156V14.6875C13.9062 14.7734 13.9766 14.8438 14.0625 14.8438H14.8457C17.002 14.8438 18.75 13.0957 18.75 10.9375C18.75 9.12695 17.5176 7.60352 15.8477 7.16211Z" fill="currentColor"/>
                </svg>
            </span>
        )
    }

    render() {

        const { size, kind, disabled, outline, icon, iconOnly, iconPosition } = this

        const classes = cs(
            size,
            kind,
            {
                'rounded': iconOnly,
                'outline': outline,
            }

        )

        // const properties = getElementAttributes(this.host.attributes)

        if (iconOnly) {
            return (
                <button class={classes} disabled={disabled} onClick={this.handleClick}>
                    {
                        this.getIcon(iconOnly)
                    }
                </button>
            )
        }

        return (
            <button class={classes} onClick={this.handleClick} disabled={disabled}>
                {
                    icon && iconPosition === "left" ? this.getIcon() : null
                }
                <slot />
                {
                    icon && iconPosition === "right" ? this.getIcon() : null
                }
            </button>
        )
    }
}

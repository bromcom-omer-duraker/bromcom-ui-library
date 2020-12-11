import { Component, Prop, Element, h } from '@stencil/core';
import cs from 'classnames'

const iconSizes = {
    default: {
        large: 16,
        medium: 14,
        small: 14,
    },
    iconOnly: {
        large: 20,
        medium: 18,
        small: 16,
    },
}

@Component({
    tag: 'bcm-button',
    styleUrl: 'buttons.scss',
    shadow: true
})
export class BcmButton {

    @Element() host: HTMLButtonElement

    @Prop() kind: 'solid' | 'ghost' = 'solid'
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() disabled: boolean = false
    @Prop() outline: boolean = false
    @Prop() icon: string
    @Prop({ attribute: 'icon-position' }) iconPosition: 'prefix' | 'suffix' = 'prefix'

    render() {

        const { size, kind, disabled, outline, icon, iconPosition } = this
        const isIconOnly = this.host.childNodes.length < 1 && icon

        const iconSize = isIconOnly ? iconSizes.iconOnly[size] : iconSizes.default[size]

        const classes = cs(
            size,
            kind,
            {
                'size-2': size === 'small' || size === 'medium',
                'size-3': size === 'large',
                'rounded': isIconOnly,
                'outline': outline,
            }
        )

        if (isIconOnly) {
            return (
                <button class={classes} disabled={disabled}>
                    <bcm-icon icon={icon} size={iconSize} type="outlined"></bcm-icon>
                </button>
            )
        }

        return (
            <button class={classes} disabled={disabled}>
                { icon && iconPosition === "prefix" && <bcm-icon type="outlined" class="prefix" icon={icon} size={iconSize}></bcm-icon>}
                <slot />
                { icon && iconPosition === "suffix" && <bcm-icon type="outlined" class="suffix" icon={icon} size={iconSize}></bcm-icon>}
            </button>
        )

    }
}

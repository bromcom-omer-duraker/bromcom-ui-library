import { Component, Prop, h } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-button',
    styleUrl: 'buttons.scss',
    shadow: true
})
export class BcmButton {

    @Prop() kind: 'solid' | 'ghost' = 'solid'
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() disabled: boolean = false
    @Prop() outline: boolean = false
    @Prop() rounded: boolean = false

    render() {

        const { size, kind, disabled, outline, rounded } = this

        const classes = cs(
            size,
            kind,
            {
                'size-2': size === 'small' || size === 'medium',
                'size-3': size === 'large',
                'rounded': rounded,
                'outline': outline,
            }
        )

        return (
            <button class={classes} disabled={disabled}>

                <slot name="prefix" />

                <slot />

                <slot name="suffix" />

            </button>
        )
    }
}

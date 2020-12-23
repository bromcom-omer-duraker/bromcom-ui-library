import { Component, h, Prop, Method, Element } from '@stencil/core'
import cs from 'classnames'

@Component({
    tag: 'bcm-select-option',
    styleUrl: 'option.scss',
    shadow: true
})
export class BcmSelectOption {
    @Element() host: HTMLElement

    @Prop() value: string
    @Prop({mutable: true, reflect: true}) selected: boolean

    @Method()
    async getLabel() {
        return this.host.innerHTML
    }

    render() {

        const classes = cs(
            'option',
            'size-2',
            'weight-semibold',
            {
                'selected': this.selected
            }
        )

        return (
            <span class={classes}>
                <slot />
            </span>
        )
    }

}
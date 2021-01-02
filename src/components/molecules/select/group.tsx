import { Component, h, Host, Prop } from '@stencil/core'

@Component({
    tag: 'bcm-select-group',
    styleUrl: 'group.scss'
})
export class BcmSelectGroup {
    @Prop() heading: string

    render() {
        return (
            <Host>
                <span class="group-title size-1"> {this.heading} </span>
                <slot />
            </Host>
        )
    }
}
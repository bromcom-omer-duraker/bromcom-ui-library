import { Component, h, Host, Prop } from '@stencil/core'

@Component({
    tag: 'bcm-select-group',
    styleUrl: 'group.scss'
})
export class BcmSelectGroup {
    @Prop() title: string

    render() {
        return (
            <Host>
                <span class="group-title size-1"> {this.title} </span>
                <slot />
            </Host>
        )
    }
}
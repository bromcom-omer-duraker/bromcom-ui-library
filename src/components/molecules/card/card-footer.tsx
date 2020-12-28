import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bcm-card-footer',
    styleUrl: 'card.scss',
    shadow: true
})
export class BcmCard {

    render() {
        return (
            <Host>
                <slot />
            </Host>
        )
    }
} 
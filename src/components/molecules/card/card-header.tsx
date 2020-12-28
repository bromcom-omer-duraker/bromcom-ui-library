import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bcm-card-header',
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
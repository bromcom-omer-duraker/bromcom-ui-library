import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bcm-card-footer',
})
export class BcmCardFooter {

    render() {
        return (
            <Host>
                <slot />
            </Host>
        )
    }
} 
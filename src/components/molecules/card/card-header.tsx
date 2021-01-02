import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bcm-card-header',
})
export class BcmCardHeader {

    render() {
        return (
            <Host>
                <slot />
            </Host>
        )
    }
} 
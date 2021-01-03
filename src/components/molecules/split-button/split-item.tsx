import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'bcm-split-item',
    styleUrl: 'split-item.scss',
    shadow: true
})
export class BcmSplitItem {

    @Prop() icon: string
    @Prop({ attribute: 'icon-position' }) iconPosition: 'prefix' | 'suffix' = 'prefix'

    render() {
        return (
            <button class="split-item size-2">
                {this.icon && (
                    <bcm-icon icon={this.icon} size={16}></bcm-icon>
                )}
                <slot />
            </button>
        )
    }
}
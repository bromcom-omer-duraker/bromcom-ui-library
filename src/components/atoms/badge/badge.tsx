import { Component, Prop, h, Host } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-badge',
    styleUrl: 'badge.scss',
    shadow: true
})
export class BcmBadge {

    @Prop() type: 'basic' | 'info' = 'basic'
    @Prop() status: string = this.type === 'basic' ? 'error' : 'default'
    @Prop() value: number

    render() {

        const dotClass = cs(
            'badge-dot',
            this.status
        )

        if (this.type === 'info') {
            return (
                <div class="badge-info">
                    <span class={dotClass}></span>
                    <span class="badge-text">
                        <slot />
                    </span>
                </div>
            )
        }

        return (
            <Host>
                {
                    !this.value ? <span class={dotClass}></span>
                    : (
                        <span class={`badge-basic ${this.status}`}> {this.value} </span>
                    )
                }
            </Host>
        )
    }
}

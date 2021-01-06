import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'bcm-link',
    styleUrl: 'link.scss',
    shadow: true
})
export class BcmLink {
    
    @Prop() href: string
    @Prop() target: string
    @Prop() icon: string

    render() {
        return (
            <a class="anchor" href={this.href} target={this.target}>
                {this.icon && <bcm-icon icon={this.icon} size={16}></bcm-icon>}
                <slot />
            </a>
        )
    }
}
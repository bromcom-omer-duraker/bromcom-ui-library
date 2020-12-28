import { Component, h, State, Element, Prop } from '@stencil/core'
import cs from 'classnames'

@Component({
    tag: 'bcm-card',
    styleUrl: 'card.scss',
    shadow: true
})
export class BcmCard {

    @Element() host: HTMLElement

    @Prop() size: 'small' | 'medium' = 'medium'

    @State() header: boolean
    @State() footer: boolean

    componentDidRender() {
        const slot = this.host.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]

        slot.map(el => {
            if(String(el.tagName).toLowerCase() === 'bcm-card-header') {
                el.slot = 'header'
                this.header = true
            }

            if (String(el.tagName).toLowerCase() === 'bcm-card-footer') {
                el.slot = 'footer'
                this.footer = true
            }
        })
    }

    render() {

        const classes = cs(
            'card',
            this.size
        )
        return (
            <div class={classes}>
                {
                    this.header && (
                        <div class="header size-3 weight-semibold">
                            <slot name="header" />
                        </div>
                    )
                }
                
                <div class="card-body">
                    <slot />
                </div>
                
                {
                    this.footer && (
                        <div class="footer">
                            <slot name="footer" />
                        </div>
                    )
                }
            </div>
        )
    }
}
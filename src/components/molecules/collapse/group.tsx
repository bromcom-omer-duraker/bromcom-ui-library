import { Component, h, Prop, Element } from '@stencil/core'

@Component({
    tag: 'bcm-collapse-group',
})
export class BcmCollapseGroup {

    openId = null

    @Element() host: HTMLElement

    @Prop() borderless: boolean = false

    componentDidRender() {
        const elements = Array.from(this.host.querySelectorAll('bcm-collapse'))

        elements.map(el => {
            el.addEventListener('bcm-open', (e: CustomEvent) => {
                this.openId = e.detail
                
                elements.map(c => {
                    c.id === this.openId ? (c.open = true) : (c.open = false)
                })
            })

        })
    }

    render() {
        return (
            <slot />
        )
    }
}
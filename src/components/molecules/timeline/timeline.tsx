import { Component, Prop, h, Element, State } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-timeline',
    styleUrl: 'timeline.scss',
    shadow: true
})
export class BcmTimeline {
    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop() icon: string
    @Prop() type: 'left' | 'right' | 'alternate' = 'left'

    
    /**
     * Component States
     */
    @State() items: HTMLElement[] = []


    /**
     * @StencilMethod
     */
    componentDidRender() {
        let slotElements: HTMLElement[]

        slotElements = this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]

        // Get only bcm-timeline-item elements from 
        // slot childs
        slotElements.map((element: any, idx: number) => {
            if (String(element.tagName).toLowerCase() == 'bcm-timeline-item') {
                element.timelineType = this.type
                element.even = idx % 2 === 0
                element.first = idx === 0
                element.last = idx === slotElements.length - 1
                element.icon = this.icon
                this.items.push(element as HTMLInputElement)
            }
        })
    }

     /**
     * @StencilMethod
     */
    componentWillRender() {
        console.log(this.el.shadowRoot)
    }

    render() {
        const classes = cs(
            'timeline',
            [this.type]
        )
        return (
            <div class={classes}>
                <slot />
            </div>
        )
    }
}

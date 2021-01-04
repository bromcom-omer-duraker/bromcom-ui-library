import { Component, Prop, h, Element } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-timeline-item',
    styleUrl: 'timeline-item.scss',
    shadow: true
})
export class BcmTimelineItem {
    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop() even: boolean = false
    @Prop() first: boolean = false
    @Prop() last: boolean = false
    @Prop() icon: string
    @Prop() timelineType: 'left' | 'right' | 'alternate' = 'left'

    componentDidRender() {
        console.log(this.icon)
    }

    render() {
        const classes = cs(
            'timeline-item',
            [this.timelineType], 
            {
                even: this.even,
                first: this.first,
                last: this.last,
                icon: this.icon
            }
        )
        return (
            <div class={classes}>
                {
                    this.icon && (
                        <bcm-icon icon={this.icon} size={16} color="prime-blue-6" />
                    )
                }
                <slot />
            </div>
        )
    }
}

import { Component, h, Host, Method, Prop, Event, EventEmitter, Element } from '@stencil/core'
import cs from 'classnames'
import popoverPlacement from '../../../utils/popover-placement'
import { placementType } from '../tooltip/tooltip'

@Component({
    tag: 'bcm-popover',
    styleUrl: 'popover.scss',
    shadow: true
})
export class BcmPopover {
    
    @Element() host: HTMLElement

    @Prop() message: string
    @Prop() heading: string
    @Prop({ mutable: true, reflect: true}) placement: placementType = 'top'
    @Prop() trigger: 'hover' | 'click' | 'focus' = 'click'
    @Prop({ mutable: true, reflect: true }) open: boolean

    /* Emitted when tooltip opened */
    @Event({ eventName: 'bcm-show' }) onShow: EventEmitter
    
    /* Emitted when tooltip closed */
    @Event({ eventName: 'bcm-hide' }) onHide: EventEmitter

    @Method()
    async show() {

        // Prevent subsequent calls
        if (this.open) {
            return
        }
        
        this.open = true
        this.onShow.emit()
    }

    @Method()
    async hide() {

        // Prevent subsequent calls
        if (!this.open) {
            return
        }
        
        this.open = false
        this.onHide.emit()
    }

    hasTrigger(trigger: string) {
        return this.trigger === trigger
    }

    getPlacement() {
        const placements = this.placement.split('-')

        if (placements.length === 1) {
            placements.push('center')
        }

        return placements
    }

    /*
        Trigger Functions
    */

    handleMouseOver() {
        if (this.hasTrigger('hover')) {
            this.show()
        }
    }

    handleMouseOut() {
        if (this.hasTrigger('hover')) {
            this.hide()
        }
    }

    handleClick() {
        if (this.hasTrigger('click')) {
            this.open ? this.hide() : this.show()
        }
    }

    handleFocus() {
        if (this.hasTrigger('focus')) {
          this.show();
        }
    }

    handleBlur() {
        if (this.hasTrigger('focus')) {
          this.hide();
        }
    }

    componentDidRender() {
        
        const box = this.host.shadowRoot.querySelector('.box') as HTMLElement
        
        popoverPlacement(box, this.host, this.placement, (place: placementType) => this.placement = place)

    }

    render() {

        const classes = cs(
            'popover',
            ...this.getPlacement(),
            {
                'open': this.open
            }
        )

        return (
            <Host 
                onClick={() => this.handleClick()}
                onMouseOver={() => this.handleMouseOver()}
                onMouseOut={() => this.handleMouseOut()}
                onFocus={() => this.handleFocus()}
                onBlur={() => this.handleBlur()}
                tabindex={0}
            >
                
                <span class={classes}>
                    <div class="box">
                        {this.heading && <span class="heading size-2 weight-semibold"> {this.heading} </span>}
                        <span class="content size-2"> {this.message} </span>
                    </div>
                    <slot />
                </span>
            </Host>
        )
    }
}
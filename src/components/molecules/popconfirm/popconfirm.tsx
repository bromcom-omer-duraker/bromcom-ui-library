import { Component, h, Host, Method, Prop, Event, EventEmitter, Element, Listen } from '@stencil/core'
import cs from 'classnames'
import { ColorPaletteTypes } from '../../../global/variables/colors'
import popoverPlacement from '../../../utils/popover-placement'
import { placementType } from '../tooltip/tooltip'

const statuses = {
    error: ['close-circle', 'red-6'],
    warning: ['exclamation-circle', 'warmyellow-6'],
}

@Component({
    tag: 'bcm-popconfirm',
    styleUrl: 'popconfirm.scss',
    shadow: true
})
export class BcmPopconfirm {

    @Element() host: HTMLElement
    box: HTMLElement

    @Prop() message: string
    @Prop() heading: string
    @Prop() status: 'warning' | 'error' = 'warning'
    @Prop({ attribute: 'cancel-text' }) cancelText: string
    @Prop({ attribute: 'okey-text' }) okeyText: string
    @Prop({ mutable: true, reflect: true }) placement: placementType = 'top'
    @Prop() trigger: 'hover' | 'click' | 'focus' = 'click'
    @Prop({ mutable: true, reflect: true }) open: boolean

    /* Emitted when popconfirm opened */
    @Event({ eventName: 'bcm-show' }) onShow: EventEmitter

    /* Emitted when popconfirm closed */
    @Event({ eventName: 'bcm-hide' }) onHide: EventEmitter

    /* Emitted when confirm button clicked */
    @Event({ eventName: 'bcm-confirm' }) onConfirm: EventEmitter

    @Listen('click', { target: 'window', capture: true })
    handleClickOutside(e: MouseEvent) {

        if (!this.host.contains(e.target as HTMLElement)) {
            if (this.open) this.open = false
        }
    }

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

    handleClick() {
        this.open ? this.hide() : this.show()
    }

    handleConfirm() {
        this.onConfirm.emit()
    }

    getIcon() {

        const status = statuses[this.status]

        return (
            <bcm-icon class="icon" icon={status[0]} type="fill" color={status[1] as ColorPaletteTypes}></bcm-icon>
        )
    }

    componentDidRender() {

        const box = this.host.shadowRoot.querySelector('.box') as HTMLElement
        popoverPlacement(box, this.placement, (place: placementType) => this.placement = place)

        this.box = this.host.shadowRoot.querySelector('.popconfirm')
    }

    render() {

        const classes = cs(
            'popconfirm',
            ...this.getPlacement(),
            {
                'open': this.open
            }
        )

        return (
            <Host
                onClick={() => this.handleClick()}
                tabindex={0}
            >
                <div class={classes}>
                    <div class="box">
                        <div class="content">
                            {this.getIcon()}
                            <bcm-text scale="size-2"> {this.message} </bcm-text>
                        </div>
                        <div class="buttons">
                            <bcm-button size="small" outline={true}>{this.cancelText}</bcm-button>
                            <bcm-button size="small" onClick={() => this.handleConfirm()}>{this.okeyText}</bcm-button>
                        </div>
                    </div>
                    <slot />
                </div>
            </Host>
        )
    }
}
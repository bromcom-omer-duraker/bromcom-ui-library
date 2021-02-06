import { Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core'
import { TypeProp, TypeProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-tab',
    styleUrl: 'tab.scss',
    shadow: true
})
export class BcmTab {
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'type'       }) type: TypeProp = TypeProps.normal
    @Prop({ attribute: 'active'     }) active: boolean = false
    @Prop({ attribute: 'disabled'   }) disabled?: boolean = false
    @Prop({ attribute: 'closable'   }) closable?: boolean = false

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-click' }) click: EventEmitter
    @Event({ eventName: 'bcm-close' }) close: EventEmitter

    /**
     * @desc
     */
    handleClose() {
        if (this.disabled) return
        this.close.emit()
    }

    /**
     * @desc
     * @param event 
     */
    handleClick(event: MouseEvent) {
        if (this.disabled) return
        const targetElement: HTMLElement = event.target as HTMLElement

        // Detect close icon clicked
        // #
        if (String(targetElement.tagName).toLowerCase() == 'bcm-icon' && targetElement.classList.contains('close')) {
            this.close.emit(event)
        }
        else {
            this.click.emit(event)
        }
    }

    render() {
        const { active, disabled, closable } = this

        const classes = cs(
            'tab',
            [this.type],
            {
                'active': active,
                'disabled': disabled,
                'closable': closable
            }
        )

        return (
            <div class={classes} onClick={(event) => this.handleClick(event)}>
                <slot name="icon-prefix" />
                <slot />
                <slot name="icon-suffix" />
                {
                    this.closable && (
                        <bcm-icon class="close" icon="close" color="grey-10" />
                    )
                }
            </div>
        )
    }
}

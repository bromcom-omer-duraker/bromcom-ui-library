import { Component, Prop, h, Event, EventEmitter, Listen, State } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-menu-item',
    styleUrl: 'menu-item.scss',
    shadow: true
})
export class BcmMenuItem {

    /**
     * Component Properties
     */
    @Prop({ attribute: 'selected'   }) selected: boolean = false
    @Prop({ attribute: 'padding'    }) padding: boolean = false 

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-menu-item-selected' }) menuItemSelected: EventEmitter

    /**
     * Component States
     */
    @State() id: string = (Math.random() * 4).toString(16).replace('.', '')
  
    /**
     * @ComponentMethod
     */
    componentWillRender() {
        if (this.selected) this.menuItemSelected.emit(this.id)
    }

    /**
     * @descc
     * @param event 
     */
    @Listen('bcm-menu-clear-selecteds', { target: 'document' })
    handleMenuClearSelecteds(event) {
        if (event.detail && event.detail !== this.id)
            this.selected = false
    }

    /**
     * @desc
     */
    handleClick() {
        this.selected = true
        this.menuItemSelected.emit(this.id)
    }

    render() {
        const classes = cs(
            'menu-item',
            {
                'selected': this.selected,
                'padding' : this.padding
            }
        )

        return (
            <div class={classes} onClick={() => this.handleClick()}>
                <slot name="icon" />
                <slot />
            </div>
        )
    }
}

import { Component, h, Event, EventEmitter, Element, Listen } from '@stencil/core';

@Component({
    tag: 'bcm-menu',
    styleUrl: 'menu.scss',
    shadow: true
})
export class BcmMenu {
    @Element() el: HTMLElement

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-menu-item-selected'    }) menuItemSelected: EventEmitter
    @Event({ eventName: 'bcm-menu-clear-selecteds'  }) menuClearSelecteds: EventEmitter
    
 

    /**
     * @desc
     */
    @Listen('bcm-menu-item-selected')
    handleMenuItemSelected(event: any) {
        this.menuClearSelecteds.emit(event.detail)
    }

    render() {
        return (
            <div class="menu">
                <slot />
            </div>
        )
    }
}

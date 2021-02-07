import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'bcm-menu-item',
    styleUrl: 'menu-item.scss',
    shadow: true
})
export class BcmMenuItem {

    render() {
        return (
            <div class="menu-item">
                <slot name="icon" />
                <slot />
            </div>
        )
    }
}

import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'bcm-menu',
    styleUrl: 'menu.scss',
    shadow: true
})
export class BcmMenu {

    render() {
        return (
            <div class="menu">
                <slot />
            </div>
        )
    }
}

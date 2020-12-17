import { Element, Component, h } from '@stencil/core'; 

@Component({
    tag: 'bcm-checkbox',
    styleUrl: 'checkbox.scss',
    shadow: true
})
export class BcmCheckbox {
    @Element() el: HTMLElement;

    render() {
        return(
           <div>
                <input id="checkbox" type="checkbox"/>
                <label htmlFor="checkbox">
                    <slot />
                </label>
           </div>
        )
    }
}
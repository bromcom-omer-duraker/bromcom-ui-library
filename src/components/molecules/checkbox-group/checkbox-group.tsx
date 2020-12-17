import { Element, Component, Event, EventEmitter, Prop, h } from '@stencil/core'
import cs from 'classnames'

@Component({
    tag: 'bcm-checkbox-group',
    styleUrl: 'checkbox-group.scss',
    shadow: true
})
export class BcmCheckboxGroup {
    /**
     * Component Element
     */
    @Element() el: HTMLElement;

    /**
     * Component Properties
     */
    @Prop() direction: 'horizontal' | 'vertical' = 'horizontal'

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-change' }) change: EventEmitter

    /**
     * Private variables
     */
    private checkboxes: HTMLInputElement[]
    
    /**
     * @ComponentMethod
     */
    componentDidRender() {
        const slotElements: HTMLElement[] = 
            this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[];
        
        // Get only bcm-checkbox elements from 
        // slot childs
        slotElements.map(element => {
            element.tagName == 'bcm-checkbox' && this.checkboxes.push(element as HTMLInputElement)
        });
        
    }

    render() {
        const classes = cs(
            "group-container",
            this.direction
        );
        return(
            <div class={classes}>
                <slot />
            </div>
        )
    }
}
import { Component, Prop, h, Event, EventEmitter, Host, Element } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-menu-group',
    styleUrl: 'menu-group.scss',
    shadow: true
})
export class BcmMenuGroup {
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'          }) _title: string = ''
    @Prop({ attribute: 'collapsible'    }) collapsible: boolean = false
    @Prop({ attribute: 'open'           }) open: boolean = false
    @Prop({ attribute: 'padding'        }) padding: boolean = false

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-menu-item-selected' }) menuItemSelected: EventEmitter

     /**
     * @ComponentMethod
     */
    componentDidRender() {
        let slotElements: HTMLElement[]
        let query = this.el.shadowRoot.querySelector('slot:not([name])')

        slotElements = (query as HTMLSlotElement).assignedElements() as HTMLElement[]

        // Get only bcm-menu-item elements from 
        // slot childs
        slotElements.map((element: any) => {
            console.log(element.tagName)
            String(element.tagName).toLowerCase() == 'bcm-menu-item' || String(element.tagName).toLowerCase() == 'bcm-menu-group' 
                && (element.padding = true)
        })
    }
    

    /**
     * @desc
     */
    handleTitleClick() {
        if (!this.collapsible) return
        this.open = !this.open
    }

    /**
     * @desc
     */
    handleMenuItemSelected(selected) {
        if (selected && !this.open) this.open = true
    }    

    render() {

        const classes = cs(
            'menu-group',
            {
                'collapsible': this.collapsible,
                'padding': this.padding
            }
        )

        const innerClasses = cs(
            'inner',
            {
                'open': this.open
            }
        )

        return (
            <Host on-bcm-menu-item-selected={(event) => this.handleMenuItemSelected(event.detail)}>
                <div class={classes}>
                    <div class="title" onClick={() => this.handleTitleClick()}>
                        <div class="text-content">
                            <slot name="icon" />
                            {this._title}
                        </div>
                        {
                            this.collapsible && (
                                <bcm-icon
                                    class="collapse-icon"
                                    size={8}
                                    icon={this.open ? 'caret-up' : 'caret-down'}
                                    type="fill"
                                    color="grey-10"
                                ></bcm-icon>
                            )
                        }
                        
                    </div>
                    <div class={innerClasses}>
                        <slot />
                    </div>
                </div>
            </Host>
        )
    }
}

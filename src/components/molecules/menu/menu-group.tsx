import { Component, Prop, h, State } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-menu-group',
    styleUrl: 'menu-group.scss',
    shadow: true
})
export class BcmMenuGroup {

    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'          }) _title: string = ''
    @Prop({ attribute: 'collapsible'    }) collapsible: boolean = false
    
    /**
     * Component States
     */
    @State() open: boolean = false

    /**
     * @desc
     */
    handleTitleClick() {
        if (!this.collapsible) return
        this.open = !this.open
    }

    render() {

        const classes = cs(
            'menu-group',
            {
                'collapsible': this.collapsible
            }
        )

        const innerClasses = cs(
            'inner',
            {
                'open': this.open
            }
        )

        return (
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
        )
    }
}

import { Component, h, Prop, State, Element, Listen } from '@stencil/core'
import cs from 'classnames'

@Component({
    tag: 'bcm-split-button',
    styleUrl: 'split-button.scss',
    shadow: true
})
export class BcmSplitButton {
 
    @Element() host: HTMLElement
 
    @Prop() text: string
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() disabled: boolean = false
    @Prop() outline: boolean = false
    @Prop() icon: string
    @Prop({ attribute: 'icon-position' }) iconPosition: 'prefix' | 'suffix' = 'prefix'
    
    @State() isOpen: boolean

    @Listen('click', { target: 'window', capture: true })
    handleClickOutside(e: MouseEvent) {

        if (!this.host.contains(e.target as HTMLElement)) {
            if (this.isOpen) this.isOpen = false
        }
    }

    handleOpen() {
        this.isOpen = !this.isOpen
    }

    render() {

        const { text, icon, iconPosition, disabled, outline, size } = this

        const classes = cs(
            'split_summary',
            size,
            {
                'open': this.isOpen,
                'outline': outline
            }
        )
 
        return (
            <details open={this.isOpen}>
                <summary onClick={() => this.handleOpen()} class={classes}>
                    <bcm-button
                        icon={icon}
                        iconPosition={iconPosition}
                        disabled={disabled}
                        outline={outline}
                        size={size}
                    >
                        {text}
                        <span slot="suffix" class="caret">
                            <bcm-icon icon={this.isOpen ? 'caret-up' : 'caret-down'} size={18}></bcm-icon>
                        </span>
                    </bcm-button>
                </summary>
                <div class="items-container">
                    <slot />
                </div>
            </details>
        )
    }
}
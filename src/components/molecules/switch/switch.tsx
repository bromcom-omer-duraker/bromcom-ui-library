import { Component, h, Prop } from '@stencil/core'
import cs from 'classnames'

@Component({
    tag: 'bcm-switch',
    styleUrl: 'switch.scss',
    shadow: true
})
export class BcmSwitch {

    input: HTMLInputElement;

    @Prop({ mutable:true, reflect: true }) checked: boolean = false
    @Prop() size: 'small' | 'medium' = 'medium'
    @Prop() activeIcon: string
    @Prop() inactiveIcon: string
    @Prop() activeText: string
    @Prop() inactiveText: string
    @Prop() pending: boolean = false
    @Prop({ mutable:true, reflect:true }) disabled: boolean = false

    handleClick() {
        this.checked = this.input.checked
    }

    componentWillRender() {
        if (this.pending) {
            this.disabled = true
        }
    }

    render() {        
        const { checked, size, activeIcon, inactiveIcon, activeText, inactiveText, pending, disabled } = this

        const classes = cs(
            'container',
            size,
            {
                'switch-checked': checked,
                'disabled': disabled
            }
        )

        const wrapperClass = cs(
            'wrapper',
            {
                'checked': checked,
                'disabled': disabled
            }
        )

        const isPermitted = (condition) => {
            return (condition && size === 'medium')
        }

        return (
            <label class={wrapperClass}>
                {isPermitted(activeText) && <span class="active-text size-1">{activeText}</span>}
                
                <div class={classes}>
                    {isPermitted(activeIcon) && <bcm-icon icon={activeIcon} size={14} class="icon-active"></bcm-icon>}
                    <span class="handle">
                        {pending && <span class="spinner"></span>}
                    </span>
                    {isPermitted(inactiveText) && <bcm-icon icon={inactiveIcon} size={14} class="icon-inactive"></bcm-icon>}
                </div>
                
                <input
                    onClick={() => this.handleClick()}
                    ref={el => (this.input = el)}
                    checked={checked}
                    type="checkbox"
                    class="switch"
                    disabled={disabled}
                />
                
                {isPermitted(inactiveText) && <span class="inactive-text size-1">{inactiveText}</span>}
            </label>
        )
    }
}
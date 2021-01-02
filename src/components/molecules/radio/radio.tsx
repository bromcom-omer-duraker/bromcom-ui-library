import { Component, h, Prop, Event, EventEmitter, Host } from "@stencil/core";
import cs from 'classnames'

@Component({
    tag: 'bcm-radio',
    styleUrl: 'radio.scss',
    shadow: true,
})
export class BcmRadio {

    private radio: HTMLInputElement

    @Prop({ mutable: true, reflect: true }) checked: boolean
    @Prop({ reflect:true }) value: string | number
    @Prop({ reflect:true }) disabled: boolean
    @Prop() optionType: 'default' | 'button' = 'default'
    @Prop() buttonStyle: 'solid' | 'outline' = 'solid'
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'

    @Event({ eventName: 'bcm-change', bubbles: false }) change: EventEmitter
    @Event({ eventName: 'bcm-focus', bubbles: false }) focus: EventEmitter
    @Event({ eventName: 'bcm-blur', bubbles: false }) blur: EventEmitter
    
    handleFocus() {
        this.focus.emit()
    }

    handleBlur() {
        this.blur.emit()
    }

    handleChange() {
        this.checked = this.radio.checked
        
        this.change.emit({
            value: this.radio.value,
            checked: this.radio.checked
        })
    }

    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    render() {

        const { checked, value, disabled, optionType, buttonStyle, size } = this

        const defaultClasses = cs(
            'radio-container',
            'size-2',
            {
                'checked': checked,
                'disabled': disabled
            }
        )

        const buttonClasses =cs(
            'radio-button',
            buttonStyle,
            size,
            {
                'size-2': size === 'small' || size === 'medium',
                'size-3': size === 'large',
                'checked': checked,
                'disabled': disabled,
            }
        )

        return (
            <Host
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}>
                <label class={optionType == 'default' ? defaultClasses : buttonClasses}>
                    <input
                        type="radio" 
                        value={value} 
                        checked={checked}
                        ref={el => (this.radio = el)}
                        onChange={this.handleChange}
                        disabled={disabled}
                    />

                    {optionType === 'default' && (
                        <span class="radio">
                            <span class="inner"></span>
                        </span>
                    )}

                    <slot />
                </label>
            </Host>
        )
    }
}
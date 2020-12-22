import { Component, Prop, State, Event, EventEmitter, Method, h } from '@stencil/core';
import cs from 'classnames'

let id = 0

const defaultIcons = {
    email: 'mail',
    tel: 'phone',
    search: 'search',
    url: 'link'
}

const iconSizes = {
    'small': 14,
    'medium': 16,
    'large': 18
}

@Component({
    tag: 'bcm-input',
    styleUrl: 'input.scss',
    shadow: true
})
export class BcmInput {

    inputId = `input-${++id}`
    inputElement: HTMLInputElement

    @Prop() type: string = 'text'
    @Prop({ mutable: true }) value: any = ''
    @Prop() size: 'small' | 'medium' | 'large' = "medium"
    @Prop() label: string
    @Prop() caption: string
    @Prop({ attribute: 'caption-type' }) captionType: 'primary' | 'success' | 'warning' | 'error' | 'default' = 'default'
    @Prop() placeholder: string
    @Prop({ attribute: 'full-width' }) fullWidth: boolean = false
    @Prop() disabled: boolean = false
    @Prop() clearable: boolean = false
    @Prop({ attribute: 'password-toggle' }) passwordToggle: boolean
    @Prop({ attribute: 'no-default-icon' }) noDefaultIcon: boolean
    @Prop({ reflect: true }) name: string

    @State() hasFocus: boolean = false
    @State() isPasswordVisible: boolean = false

    @Event({ eventName: 'bcm-focus' }) focus: EventEmitter
    @Event({ eventName: 'bcm-blur' }) blur: EventEmitter
    @Event({ eventName: 'bcm-clear' }) clear: EventEmitter
    @Event({ eventName: 'bcm-change' }) change: EventEmitter
    @Event({ eventName: 'bcm-input' }) input: EventEmitter

    @Method()
    async setFocus() {
        this.inputElement.focus();
    }

    @Method()
    async removeFocus() {
        this.inputElement.blur();
    }

    @Method()
    async select() {
        return this.inputElement.select();
    }

    handleFocus() {
        this.hasFocus = true
        this.focus.emit()
    }

    handleBlur() {
        this.hasFocus = false
        this.blur.emit()
    }

    handleChange() {
        this.value = this.inputElement.value
        this.change.emit(this.value)
    }

    handleInput() {
        this.value = this.inputElement.value
        this.input.emit(this.value)
    }

    handleClear(e: MouseEvent) {

        this.value = ''
        this.inputElement.focus()
        this.clear.emit()

        e.stopPropagation()
    }

    changePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible

    }

    incrementNumber() {
        this.value = parseInt(this.value) + 1
    }

    decrementNumber() {
        this.value = parseInt(this.value) - 1
    }

    connectedCallback() {
        this.changePasswordVisibility = this.changePasswordVisibility.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.incrementNumber = this.incrementNumber.bind(this)
        this.decrementNumber = this.decrementNumber.bind(this)
    }

    render() {
        const { value, size, label, type, captionType, caption, placeholder, fullWidth, disabled, clearable, passwordToggle, isPasswordVisible, noDefaultIcon } = this

        const containerClasses = cs(
            'input-container',
            {
                'full-width': fullWidth
            }
        )

        const baseClasses = cs(
            'input-base',
            'input-' + size,
            {
                'focused': this.hasFocus,
                'disabled': disabled,
                'empty': value?.length < 1
            }
        )

        const inputClass = size === 'large' ? 'size-3' : 'size-2'

        const captionClasses = cs(
            'size-1',
            'input-caption',
            'caption-' + captionType
        )

        return (
            <div class={containerClasses}>
                {label && <label htmlFor={this.inputId} class="label size-1"> {label} </label>}

                <div class={baseClasses}>
                    <span class="input-prefix">
                        <slot name="prefix" />
                    </span>

                    <input
                        id={this.inputId}
                        class={inputClass}
                        ref={el => (this.inputElement = el)}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onInput={this.handleInput}
                        type={type === 'password' && isPasswordVisible ? 'text' : type}
                        placeholder={placeholder}
                        value={this.value}
                        disabled={this.disabled}
                    />

                    {
                        type === 'password' && passwordToggle && (
                            <button class="input-password-toggle" onClick={this.changePasswordVisibility}>
                                <bcm-icon 
                                    icon={isPasswordVisible ? "eye-invisible" : "eye"}
                                    type="outlined"
                                    size={iconSizes[size]}
                                    color="grey-7">
                                </bcm-icon>
                            </button>
                        )
                    }

                    {
                        type === 'text' && clearable && (
                            <button class="input-clear-button" onClick={this.handleClear}>
                                <bcm-icon icon="close-circle" type="fill" size={iconSizes[size]} color="grey-7"></bcm-icon>
                            </button>
                        )
                    }

                    {
                        Object.keys(defaultIcons).includes(type) && !noDefaultIcon && (
                            <span class="input-suffix default-icon">
                                <bcm-icon icon={defaultIcons[type]} type="outlined" size={18} color="grey-7"></bcm-icon>
                            </span>
                        )
                    }

                    {
                        type === 'number' && (
                            <div class="caret-container">
                                <span class="caret" onClick={this.incrementNumber}>
                                    <bcm-icon icon="caret-up" type="outlined" color="grey-7" size={8}></bcm-icon>
                                </span>
                                <span class="caret" onClick={this.decrementNumber}>
                                    <bcm-icon icon="caret-down" type="outlined" color="grey-7" size={8}></bcm-icon>
                                </span>
                            </div>
                        )
                    }

                    <span class="input-suffix">
                        <slot name="suffix" />
                    </span>

                </div>

                {caption && <span class={captionClasses}> {caption} </span>}

            </div>
        )
    }
}

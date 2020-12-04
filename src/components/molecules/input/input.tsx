import { Component, Prop, State, Event, EventEmitter, Method, h } from '@stencil/core';
import cs from 'classnames'

let id = 0

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

    @State() hasFocus: boolean = false
    @State() isPasswordVisible: boolean = false

    @Event({ eventName: 'bcm-focus'}) focus: EventEmitter
    @Event({ eventName: 'bcm-blur'}) blur: EventEmitter
    @Event({ eventName: 'bcm-clear'}) clear: EventEmitter
    @Event({ eventName: 'bcm-change'}) change: EventEmitter
    @Event({ eventName: 'bcm-input'}) input: EventEmitter
    
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

    clearIcon() {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.125 9C1.125 4.65117 4.65117 1.125 9 1.125C13.3488 1.125 16.875 4.65117 16.875 9C16.875 13.3488 13.3488 16.875 9 16.875C4.65117 16.875 1.125 13.3488 1.125 9ZM5.78467 6.58035L8.2043 8.99998L5.78467 11.4196C5.72998 11.4743 5.72998 11.5638 5.78467 11.6185L6.38129 12.2151C6.43598 12.2698 6.52547 12.2698 6.58017 12.2151L8.9998 9.79548L11.4194 12.2151C11.4741 12.2698 11.5636 12.2698 11.6183 12.2151L12.2149 11.6185C12.2696 11.5638 12.2696 11.4743 12.2149 11.4196L9.79529 8.99998L12.2149 6.58035C12.2696 6.52566 12.2696 6.43616 12.2149 6.38147L11.6183 5.78485C11.5636 5.73016 11.4741 5.73016 11.4194 5.78485L8.9998 8.20448L6.58017 5.78485C6.52547 5.73016 6.43598 5.73016 6.38129 5.78485L5.78467 6.38147C5.72998 6.43616 5.72998 6.52566 5.78467 6.58035Z" fill="#8C8C8C" />
            </svg>
        )
    }

    eyeIcon(visible: boolean) {
        if (visible) {
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0822 11.3957C21.2583 9.65996 20.2778 8.24434 19.1408 7.14887L17.9483 8.34137C18.9207 9.27067 19.7678 10.4864 20.5002 12.0004C18.5502 16.0364 15.7822 17.9536 11.9994 17.9536C10.8639 17.9536 9.81808 17.7787 8.86182 17.429L7.56972 18.7211C8.89784 19.3344 10.3744 19.6411 11.9994 19.6411C16.5041 19.6411 19.865 17.295 22.0822 12.6028C22.1714 12.4141 22.2176 12.208 22.2176 11.9993C22.2176 11.7906 22.1714 11.5845 22.0822 11.3957ZM20.5923 3.88074L19.5932 2.88043C19.5757 2.863 19.5551 2.84917 19.5323 2.83973C19.5095 2.8303 19.4851 2.82544 19.4605 2.82544C19.4359 2.82544 19.4115 2.8303 19.3887 2.83973C19.3659 2.84917 19.3453 2.863 19.3278 2.88043L16.7645 5.44262C15.3512 4.72074 13.7628 4.35981 11.9994 4.35981C7.49472 4.35981 4.13378 6.7059 1.91659 11.3981C1.82747 11.5868 1.78125 11.7929 1.78125 12.0016C1.78125 12.2103 1.82747 12.4164 1.91659 12.6051C2.80237 14.4707 3.86878 15.9661 5.11581 17.0913L2.63565 19.5707C2.60052 19.6059 2.58078 19.6536 2.58078 19.7033C2.58078 19.753 2.60052 19.8007 2.63565 19.8358L3.6362 20.8364C3.67136 20.8715 3.71903 20.8912 3.76874 20.8912C3.81845 20.8912 3.86612 20.8715 3.90128 20.8364L20.5923 4.14606C20.6097 4.12864 20.6236 4.10796 20.633 4.0852C20.6424 4.06244 20.6473 4.03804 20.6473 4.0134C20.6473 3.98876 20.6424 3.96436 20.633 3.9416C20.6236 3.91884 20.6097 3.89816 20.5923 3.88074ZM3.49862 12.0004C5.45097 7.96449 8.21893 6.04731 11.9994 6.04731C13.2777 6.04731 14.4399 6.26668 15.4944 6.7127L13.8467 8.36035C13.0664 7.94402 12.173 7.7895 11.2982 7.9196C10.4234 8.0497 9.61352 8.45752 8.98813 9.08291C8.36275 9.7083 7.95492 10.5181 7.82482 11.3929C7.69472 12.2678 7.84924 13.1612 8.26557 13.9415L6.31042 15.8967C5.22831 14.9416 4.2955 13.6476 3.49862 12.0004ZM9.28065 12.0004C9.28106 11.5871 9.37896 11.1798 9.56638 10.8114C9.75381 10.4431 10.0255 10.1242 10.3593 9.88053C10.6932 9.63691 11.0798 9.47547 11.4877 9.40933C11.8957 9.34319 12.3135 9.37421 12.7072 9.49988L9.40511 12.802C9.32234 12.5429 9.28035 12.2725 9.28065 12.0004Z" fill="#8C8C8C"/>
                    <path d="M11.9059 14.6253C11.8248 14.6253 11.7449 14.6215 11.6657 14.6143L10.4277 15.8522C11.1723 16.1374 11.9836 16.2008 12.7634 16.0347C13.5432 15.8686 14.2583 15.4802 14.822 14.9164C15.3858 14.3526 15.7742 13.6376 15.9403 12.8578C16.1064 12.0779 16.043 11.2667 15.7579 10.5221L14.5199 11.7601C14.5272 11.8393 14.5309 11.9192 14.5309 12.0003C14.5311 12.3451 14.4633 12.6865 14.3315 13.0051C14.1996 13.3236 14.0063 13.6131 13.7625 13.8569C13.5187 14.1006 13.2293 14.294 12.9107 14.4258C12.5921 14.5577 12.2507 14.6255 11.9059 14.6253Z" fill="#8C8C8C"/>
                </svg>
            )
        }

        else {
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0822 11.3953C19.8603 6.71484 16.5017 4.35938 11.9994 4.35938C7.49472 4.35938 4.13847 6.71484 1.91659 11.3977C1.82747 11.5864 1.78125 11.7925 1.78125 12.0012C1.78125 12.2099 1.82747 12.416 1.91659 12.6047C4.13847 17.2852 7.49706 19.6406 11.9994 19.6406C16.5041 19.6406 19.8603 17.2852 22.0822 12.6023C22.2627 12.2227 22.2627 11.782 22.0822 11.3953ZM11.9994 17.9531C8.21893 17.9531 5.45097 16.0359 3.49862 12C5.45097 7.96406 8.21893 6.04688 11.9994 6.04688C15.7799 6.04688 18.5478 7.96406 20.5002 12C18.5502 16.0359 15.7822 17.9531 11.9994 17.9531ZM11.9057 7.875C9.62753 7.875 7.78065 9.72188 7.78065 12C7.78065 14.2781 9.62753 16.125 11.9057 16.125C14.1838 16.125 16.0307 14.2781 16.0307 12C16.0307 9.72188 14.1838 7.875 11.9057 7.875ZM11.9057 14.625C10.4549 14.625 9.28065 13.4508 9.28065 12C9.28065 10.5492 10.4549 9.375 11.9057 9.375C13.3564 9.375 14.5307 10.5492 14.5307 12C14.5307 13.4508 13.3564 14.625 11.9057 14.625Z" fill="#8C8C8C"/>
                </svg>
            )
        }
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
        this.handleBlur   = this.handleBlur.bind(this)
        this.handleFocus  = this.handleFocus.bind(this)
        this.handleInput  = this.handleInput.bind(this)
        this.handleClear  = this.handleClear.bind(this)
        this.incrementNumber = this.incrementNumber.bind(this)
        this.decrementNumber = this.decrementNumber.bind(this)
    }

    render() {
        const { value, size, label, type, captionType, caption, placeholder, fullWidth, disabled, clearable, passwordToggle, isPasswordVisible } = this

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
                    />

                    <span class="input-suffix">
                        <slot name="suffix" />
                    </span>

                    {
                        type === 'password' && passwordToggle && (
                            <button class="input-password-toggle" onClick={this.changePasswordVisibility}>
                                {this.eyeIcon(isPasswordVisible)}
                            </button>
                        )
                    }

                    {
                        clearable && (
                            <button class="input-clear-button" onClick={this.handleClear}>
                                {this.clearIcon()}
                            </button>
                        )
                    }

                    {
                        type === 'number' && (
                            <div class="caret-container">
                                <span class="caret" onClick={this.incrementNumber}>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.71027 5.38262L4.14464 2.40762C4.07121 2.32246 3.9298 2.32246 3.85558 2.40762L1.28996 5.38262C1.19464 5.49355 1.28058 5.65605 1.43449 5.65605H6.56574C6.71964 5.65605 6.80558 5.49355 6.71027 5.38262Z" fill="currentColor"/>
                                    </svg>
                                </span>
                                <span class="caret" onClick={this.decrementNumber}>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.56574 2.34375H1.43449C1.28058 2.34375 1.19464 2.50625 1.28996 2.61719L3.85558 5.59219C3.92902 5.67734 4.07042 5.67734 4.14464 5.59219L6.71027 2.61719C6.80558 2.50625 6.71964 2.34375 6.56574 2.34375Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            </div>
                        )
                    }

                </div>

                {caption && <span class={captionClasses}> {caption} </span>}

            </div>
        )
    }
}

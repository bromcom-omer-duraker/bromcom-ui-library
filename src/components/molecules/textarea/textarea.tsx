import { Component, h, Prop, Event, EventEmitter, Method } from '@stencil/core';
import cs from 'classnames'

let id = 0

@Component({
    tag: 'bcm-textarea',
    styleUrl: 'textarea.scss',
    shadow: true
})
export class BcmTextarea {

    textareaId = `textarea-${++id}`
    textarea: HTMLTextAreaElement

    @Prop({ mutable: true, reflect: true }) value: string = ''
    @Prop() label: string
    @Prop() caption: string
    @Prop() placeholder: string
    @Prop({ attribute: 'caption-type' }) captionType: 'default' | 'primary' | 'success' | 'warning' | 'error'
    @Prop() rows: number = 1
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop({ attribute: 'full-width' }) fullWidth: boolean
    @Prop() disabled: boolean
    @Prop() clearable: boolean
    @Prop() resize: 'vertical' | 'none' | 'auto' = 'vertical'
    @Prop({ attribute: 'max-length' }) maxLength: number

    @Event({ eventName: 'bcm-focus'})  focus: EventEmitter
    @Event({ eventName: 'bcm-blur'})   blur: EventEmitter
    @Event({ eventName: 'bcm-clear'})  clear: EventEmitter
    @Event({ eventName: 'bcm-change'}) change: EventEmitter
    @Event({ eventName: 'bcm-input'})  input: EventEmitter

    @Method()
    async setFocus() {
        this.textarea.focus();
    }

    @Method()
    async removeFocus() {
        this.textarea.blur();
    }

    @Method()
    async select() {
        return this.textarea.select();
    }

    clearIcon() {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.125 9C1.125 4.65117 4.65117 1.125 9 1.125C13.3488 1.125 16.875 4.65117 16.875 9C16.875 13.3488 13.3488 16.875 9 16.875C4.65117 16.875 1.125 13.3488 1.125 9ZM5.78467 6.58035L8.2043 8.99998L5.78467 11.4196C5.72998 11.4743 5.72998 11.5638 5.78467 11.6185L6.38129 12.2151C6.43598 12.2698 6.52547 12.2698 6.58017 12.2151L8.9998 9.79548L11.4194 12.2151C11.4741 12.2698 11.5636 12.2698 11.6183 12.2151L12.2149 11.6185C12.2696 11.5638 12.2696 11.4743 12.2149 11.4196L9.79529 8.99998L12.2149 6.58035C12.2696 6.52566 12.2696 6.43616 12.2149 6.38147L11.6183 5.78485C11.5636 5.73016 11.4741 5.73016 11.4194 5.78485L8.9998 8.20448L6.58017 5.78485C6.52547 5.73016 6.43598 5.73016 6.38129 5.78485L5.78467 6.38147C5.72998 6.43616 5.72998 6.52566 5.78467 6.58035Z" fill="#8C8C8C" />
            </svg>
        )
    }

    handleFocus() {
        this.focus.emit()
    }
    
    handleBlur() {
        this.blur.emit()
    }

    handleChange() {
        this.value = this.textarea.value
        this.change.emit(this.value)
    }

    handleInput() {
        this.value = this.textarea.value
        this.setTextareaHeight()
        this.input.emit(this.value)
    }
    
    handleClear(e: MouseEvent) {

        this.value = ''
        this.clear.emit()
        this.textarea.focus()

        e.stopPropagation()
    }

    setTextareaHeight() {
        if (this.resize === 'auto') {
            this.textarea.style.height = 'auto';
            this.textarea.style.height = (this.textarea.scrollHeight + 2) + 'px';
        } else {
            this.textarea.style.height = undefined;
        }
    }

    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur   = this.handleBlur.bind(this)
        this.handleFocus  = this.handleFocus.bind(this)
        this.handleInput  = this.handleInput.bind(this)
        this.handleClear  = this.handleClear.bind(this)
        this.setTextareaHeight = this.setTextareaHeight.bind(this)
    }

    render() {
        const { fullWidth, size, rows, disabled, clearable, label, caption, captionType, value, resize, maxLength, placeholder } = this

        const wrapperClasses = cs(
            'textarea-wrapper',
            {
                'full-width': fullWidth
            }
        )

        const contanerClasses = cs(
            'textarea-container',
            'resize-' + resize,
            'textarea-' + size,
            {
                'empty': value?.length < 1,
            }
        )

        const captionClasses = cs(
            'textarea-caption',
            'caption-' + captionType
        )

        const textareaClasses = cs(
            'size-' + size,
            {
                'size-3': size === 'large',
                'size-2': size === 'small' || size === 'medium',
                'clearable': clearable
            }
        )

        return (
            <div class={wrapperClasses}>

                {label && <label class="label size-1" htmlFor={this.textareaId}> {label} </label>}

                <div class={contanerClasses}>
                    <textarea
                        ref={el => (this.textarea = el)}
                        onInput={this.handleInput}
                        onFocus={this.handleFocus}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        class={textareaClasses}
                        id={this.textareaId}
                        value={value}
                        rows={rows}
                        disabled={disabled}
                        maxlength={maxLength}
                        placeholder={placeholder}
                    >
                    </textarea>

                    {
                        clearable && (
                            <button class="clear-button" onClick={this.handleClear}>
                                {this.clearIcon()}
                            </button>
                        )
                    }
                </div>

                {
                    caption || maxLength ? (
                        <div class="textarea-footer size-1">
                            {caption && <span class={captionClasses}> {caption} </span>}
                            {maxLength && <span class="count"> {`${value.length}/${maxLength}`} </span>}
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

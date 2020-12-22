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
    @Prop({ reflect: true }) name: string

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
                                <bcm-icon icon="close-circle" type="fill" size={18} color="grey-7"></bcm-icon>
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

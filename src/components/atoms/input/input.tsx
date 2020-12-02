import { Component, Prop, h, State } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-input',
    styleUrl: 'input.scss',
    shadow: true
})
export class BcmInput {

    @Prop() size: 'small' | 'medium' | 'large' = "medium"
    @Prop() label: string
    @Prop() caption: string
    @Prop({ attribute: 'caption-type' }) captionType: 'primary' | 'success' | 'warning' | 'error' | 'default' = 'default'
    @Prop() type: string = 'text'
    @Prop() placeholder: string
    @Prop({ attribute: 'full-width' }) fullWidth: boolean = false
    @Prop() disabled: boolean = false
    @Prop() clearable: boolean = false

    @State() hasFocus: boolean

    handleFocus() {
        this.hasFocus = true
    }

    handleBlur() {
        this.hasFocus = false
    }

    connectedCallback() {
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
      }    

    render() {
        const { size, label, type, captionType, caption, placeholder, fullWidth, disabled } = this

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
                'disabled': disabled
            }
        )

        const captionClasses = cs(
            'size-1',
            'input-caption',
            'caption-' + captionType
        )

        const inputProps = { type, placeholder, disabled }

        return (
            <div class={containerClasses}>
                {label && <label htmlFor="" class="label size-1"> {label} </label>}

                <div class={baseClasses}>
                    <span class="input-prefix">
                        <slot name="prefix" />
                    </span>
                    
                    <input
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} 
                        {...inputProps}
                    />
                    
                    <span class="input-suffix">
                        <slot name="suffix" />
                    </span>
                </div>

                {caption && <span class={captionClasses}> {caption} </span>}

            </div>
        )
    }
}

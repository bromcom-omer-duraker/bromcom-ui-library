import { Component, Element, h, Prop, State, Listen, Event, EventEmitter, Watch, Host } from '@stencil/core'
import cs from 'classnames'

export declare type SelectOptionType = {
    label: string,
    value: string
}

export declare type OptionWithGroupType = {
    title: string,
    options: Array<SelectOptionType>
}

@Component({
    tag: 'bcm-select',
    styleUrl: 'select.scss',
    shadow: true
})
export class BcmSelect {

    renderedOptions: HTMLBcmSelectOptionElement[] = []

    @Element() host: HTMLElement

    @Prop({ mutable: true, reflect: true }) value: string
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() options: string | string | OptionWithGroupType[]
    @Prop() scrollable: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical'
    @Prop() clearable: boolean
    @Prop({ attribute: 'label' }) labelProp: string
    @Prop() caption: string
    @Prop({ attribute: 'caption-type' }) captionType: 'primary' | 'success' | 'warning' | 'error' | 'default' = 'default'
    @Prop() disabled: boolean
    @Prop() flex: boolean

    @State() label: string
    @State() isOpen: boolean = false
    @State() usingSlots: boolean = true
    @State() parsedOptions: (SelectOptionType | OptionWithGroupType)[]

    @Event({ eventName: 'bcm-change' }) change: EventEmitter
    @Event({ eventName: 'bcm-clear' }) clear: EventEmitter
    @Event({ eventName: 'bcm-focus' }) focus: EventEmitter
    @Event({ eventName: 'bcm-blur' }) blur: EventEmitter

    @Watch('value')
    handleChange(newValue: string) {
        this.change.emit(newValue)
    }

    @Watch('options')
    parseOptions(newValue: string | OptionWithGroupType[]) {
        if (newValue) {
            typeof newValue === 'string'
                ? this.parsedOptions = JSON.parse(newValue)
                : this.parsedOptions = newValue

            if (this.parsedOptions.length > 0) this.usingSlots = false
        }
    }

    getOptions() {

        if (this.usingSlots) {
            const elements = this.host.shadowRoot.querySelector('slot').assignedElements({ flatten: true }) as HTMLElement[]

            elements.map(el => {
                if (String(el.tagName).toLowerCase() === 'bcm-select-group') {
                    this.renderedOptions = [...this.renderedOptions, ...Array.from(el.querySelectorAll('bcm-select-option'))]
                }
            })

            this.renderedOptions = [...this.renderedOptions, ...elements.filter(element => String(element.tagName).toLowerCase() === 'bcm-select-option') as HTMLBcmSelectOptionElement[]]
        }

        else {
            this.renderedOptions = Array.from(this.host.shadowRoot.querySelectorAll('bcm-select-option'))
        }
    }

    handleOpen() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen
        }
    }

    handleClear(e: MouseEvent) {
        this.value = ''
        this.label = ''

        this.clear.emit()

        e.stopPropagation()
    }

    handleFocus() {
        this.focus.emit()
    }

    handleBlur() {
        this.blur.emit()
    }

    @Listen('click', { target: 'window', capture: true })
    handleClickOutside(e: MouseEvent) {

        if (!this.host.contains(e.target as HTMLElement)) {
            if (this.isOpen) this.isOpen = false
        }
    }

    async setLabel(options: HTMLBcmSelectOptionElement[]) {
        await customElements.whenDefined('bcm-select-option')

        options.map((option: HTMLBcmSelectOptionElement) => {
            if (!option.disabled) {
                option.addEventListener('click', () => {
    
                    option.getLabel().then(label => this.label = label)
                    this.value = option.value
                    this.isOpen = false
                }, { once: true })
                if (option.value === this.value) {
                    option.selected = true
                }
    
                else {
                    option.selected = false
                }
            }
        })
    }

    componentWillLoad() {
        this.parseOptions(this.options)
    }

    componentDidRender() {
        this.getOptions()
        this.setLabel(this.renderedOptions)
    }

    render() {

        const { size, clearable, value, labelProp, caption, captionType, disabled, flex } = this

        const selected = cs(
            'selected',
            'size-3',
            'selected-' + this.size,
            {
                'size-3': size === 'large',
                'size-2': size === 'small' || size === 'medium',
                'disabled': disabled
            }
        )

        const menu = cs(
            'option-container',
            {
                'hidden': !this.isOpen,
                [this.scrollable]: this.scrollable === 'horizontal' || this.scrollable === 'vertical',
                'horizontal vertical': this.scrollable === 'both',
                'flex': flex
            }
        )

        const captionClasses = cs(
            'size-1',
            'input-caption',
            'caption-' + captionType
        )

        return (
            <Host onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()}>
                <div class="container">

                    {labelProp && <label class="label size-1"> {labelProp} </label>}

                    <div class={selected} onClick={() => this.handleOpen()} tabIndex={-1}>
                        <span innerHTML={this.label} class="selected-text"></span>
                        <div class="buttons">
                            {
                                clearable && value && (
                                    <button class="select-clear-button" onClick={(e) => this.handleClear(e)}>
                                        <bcm-icon icon="close-circle" type="fill" size={18} color="grey-7"></bcm-icon>
                                    </button>
                                )
                            }
                            <span class={this.isOpen ? 'open' : 'close'}>
                                <bcm-icon icon="caret-up" type="outlined" size={18} color="grey-6"></bcm-icon>
                            </span>
                        </div>
                    </div>
                    <div class={menu}>
                        <div class="options-viewport">
                            <div class="items">
                                {
                                    this.parsedOptions
                                        ? this.parsedOptions.map(option =>
                                            'title' in option ? (
                                                <bcm-select-group title={option.title}>
                                                    {
                                                        option.options.map(item => (
                                                            <bcm-select-option class="group-item" value={item.value}>{item.label}</bcm-select-option>
                                                        ))
                                                    }
                                                </bcm-select-group>
                                            ) : (
                                                    <bcm-select-option value={option.value}>{option.label}</bcm-select-option>
                                                ))
                                        : <slot />
                                }
                            </div>
                        </div>
                    </div>

                    {caption && <span class={captionClasses}> {caption} </span>}

                </div>
            </Host>
        )
    }
}
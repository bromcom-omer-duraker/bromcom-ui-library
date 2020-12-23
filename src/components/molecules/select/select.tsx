import { Component, Element, h, Prop, State, Listen, Event, EventEmitter, Watch } from '@stencil/core'
import cs from 'classnames'

export declare type OptionWithGroupType = {
    title: string,
    options: Array<string>
}

@Component({
    tag: 'bcm-select',
    styleUrl: 'select.scss',
    shadow: true
})
export class BcmSelect {

    renderedOptions: HTMLBcmSelectOptionElement[]

    @Element() host: HTMLElement

    @Prop({ mutable: true, reflect: true }) value: string
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop() options: string | OptionWithGroupType[]
    @Prop() scrollable: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical'
    @Prop() clearable: boolean

    @State() label: string
    @State() isOpen: boolean = false
    @State() usingSlots: boolean = true
    @State() parsedOptions: (string | OptionWithGroupType)[]

    @Event({ eventName: 'bcm-change' }) change: EventEmitter

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
            this.renderedOptions = elements.filter(element => String(element.tagName).toLowerCase() === 'bcm-select-option') as HTMLBcmSelectOptionElement[]
        }

        else {
            this.renderedOptions = Array.from(this.host.shadowRoot.querySelectorAll('bcm-select-option'))
        }
    }

    handleOpen() {
        this.isOpen = !this.isOpen
    }

    @Listen('click', { target: 'window', capture: true })
    handleClickOutside() {
        if (this.isOpen) this.isOpen = false
    }

    async setLabel(options: HTMLBcmSelectOptionElement[]) {
        await customElements.whenDefined('bcm-select-option')

        options.map((option: HTMLBcmSelectOptionElement) => {
            option.addEventListener('click', () => {

                option.getLabel().then(label => this.label = label)
                this.value = option.value
            }, { once: true })

            if (option.value === this.value) {
                option.selected = true
            }

            else {
                option.selected = false
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

        const { size } = this

        const selected = cs(
            'selected',
            'size-3',
            'selected-' + this.size,
            {
                'size-3': size === 'large',
                'size-2': size === 'small' || size === 'medium',
            }
        )

        const menu = cs(
            'option-container',
            {
                'hidden': !this.isOpen,
                [this.scrollable]: this.scrollable === 'horizontal' || this.scrollable === 'vertical',
                'horizontal vertical': this.scrollable === 'both'
            }
        )

        return (
            <div class="container">
                <div class={selected} onClick={() => this.handleOpen()} tabIndex={-1}>
                    <span innerHTML={this.label} class="selected-text"></span>
                    <span class={this.isOpen ? 'open' : 'close'}>
                        <bcm-icon icon="caret-up" type="outlined" size={18} color="grey-6"></bcm-icon>
                    </span>
                </div>
                <div class={menu}>
                    <div class="options-viewport">
                        <div class="items">
                            {
                                
                                this.parsedOptions ? this.parsedOptions.map(option => (
                                    <bcm-select-option value={option as string}>{option}</bcm-select-option>
                                )) : <slot />
                            }
                        </div>
                    </div>                 
                </div>
            </div>
        )
    }
}
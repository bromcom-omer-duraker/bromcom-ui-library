import { Component, h, Element, Prop, Event, EventEmitter, Watch, State } from "@stencil/core";
import cs from 'classnames'

export declare type OptionType = {
    label: string,
    value: string | number,
    disabled?: boolean
}

@Component({
    tag: 'bcm-radio-group',
    styleUrl: 'group.scss',
    shadow: true
})
export class BcmRadioGroup {

    private childRadios: HTMLBcmRadioElement[] = []
    
    @Element() host: HTMLElement
    
    @Prop({ mutable: true, reflect: true }) value: string | number
    @Prop() direction: 'vertical' | 'horizontal' = 'horizontal'
    @Prop() options: OptionType[] | string
    @Prop() optionType: 'default' | 'button' = 'default'
    @Prop() buttonStyle: 'solid' | 'outline' = 'solid'
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop({ reflect: true }) name: string

    @State() radioOptions: OptionType[] = []
    @State() usingSlots: boolean = true

    @Event({ eventName: 'bcm-change' }) change: EventEmitter

    @Watch('options')
    parseOptions(newValue: string | OptionType[]) {
        if (newValue) {
            typeof newValue === 'string'
                ? this.radioOptions = JSON.parse(newValue)
                : this.radioOptions = newValue
            
            if (this.radioOptions.length > 0) this.usingSlots = false
        }
    }

    // If checked radio changes, emits change event
    @Watch('value')
    handleChange(newValue: string | number) {
        this.change.emit(newValue)
    }

    // Controls radios styles and states
    controlRadio(elements: HTMLBcmRadioElement[]) {
        elements.forEach((radio: HTMLBcmRadioElement) => {
            radio.checked = radio.value === this.value

            radio.optionType = this.optionType
            radio.buttonStyle = this.buttonStyle
            radio.size = this.size

            radio.addEventListener('bcm-change', (e: CustomEvent) => {
                if (e.detail.checked) {
                    this.value = radio.value
                }
            }, { once: true })
        })
    }

    componentWillLoad() {
        this.parseOptions(this.options)
    }

    componentDidRender() {
        let elements: HTMLElement[] = []

        if (this.usingSlots) {
            elements = this.host.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]
            
            this.childRadios = []

            elements.map(el => {
                String(el.tagName).toLowerCase() == 'bcm-radio' && this.childRadios.push(el as HTMLBcmRadioElement)
            })

            this.controlRadio(this.childRadios)
        }

        else {
            elements = Array.from(this.host.shadowRoot.querySelectorAll('bcm-radio'))

            this.controlRadio(elements as HTMLBcmRadioElement[])
        }
    }

    render() {

        const classes = cs(
            'radio-group',
            {
                [this.direction]: this.optionType === 'default'
            }
        )

        if (this.radioOptions) {
            return (
                <div class={classes}>
                    {
                        this.radioOptions && this.radioOptions.map(radio => (
                            <bcm-radio value={radio.value} disabled={radio.disabled}> {radio.label} </bcm-radio>
                        ))
                    }
                    <slot />
                </div>
            )
        }

        return (
            <div class={classes}>
                <slot />
            </div>
        )
    }
}
import {
    h,
    Element,
    Component,
    Prop,
    Event,
    EventEmitter,
    Host,
    Method
} from '@stencil/core';

@Component({
    tag: 'bcm-checkbox',
    styleUrl: 'checkbox.scss',
    shadow: true
})
export class BcmCheckbox {
    /**
     * Private variables
     */
    private inputElement: HTMLInputElement

    /**
     * Component Element
     */
    @Element() el: HTMLElement;

    /**
     * Component Properties
     */
    @Prop({ mutable: true }) value: any = ''
    @Prop({ reflect: true }) name: string = 'checkbox';
    @Prop({ reflect: true }) checked: boolean = false;
    @Prop() disabled: boolean = false;
    @Prop() readOnly: boolean = false;

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-change' }) change: EventEmitter

    /**
    * @ComponentMethod
    */
    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * @desc
     * @param event
     * @returns
     */
    handleChange() {
        this.value = this.inputElement.checked
        this.checked = this.value
        this.change.emit({
            name: this.name,
            value: this.value
        })
    }

    /**
     * @desc
     * @param name -
     * @returns {void}
     */
    @Method()
    async check(uncheck: boolean) {
        this.inputElement.checked = uncheck;
        this.handleChange();
    }

    render() {
        const { disabled, checked, readOnly, name, handleChange } = this;

        return (
            <Host>
                <input
                    id={name}
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    ref={el => (this.inputElement = el)}
                />
                <label htmlFor={name}>
                    <span>
                        <bcm-icon 
                            class="icon-checked" 
                            icon="component-check" 
                            size="small" 
                            type="default">
                        </bcm-icon>
                    </span>
                    <slot />
                </label>
            </Host>
        )
    }
}
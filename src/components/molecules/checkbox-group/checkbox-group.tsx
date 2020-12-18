import {
    h, 
    Element, 
    Component, 
    Event, 
    EventEmitter, 
    Prop, 
    State, 
    Watch, 
    Method,
    Host
} from '@stencil/core'
import cs from 'classnames'
import { BcmCheckbox } from '../checkbox/checkbox'

@Component({
    tag: 'bcm-checkbox-group',
    styleUrl: 'checkbox-group.scss',
    shadow: true
})
export class BcmCheckboxGroup {
    /**
     * Private variables
     */
    private checkboxes: HTMLInputElement[] = []


    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop() direction: 'horizontal' | 'vertical' = 'horizontal'
    @Prop() items: Array<object> | string = []
    @Prop() indeterminate: boolean = false

    /**
     * Component State Variables
     */
    @State() indeterminateState: 'uncheck' | 'indeterminate' | 'determinate' = 'uncheck'
    @State() checkboxesProp: Array<object> = []

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-change' }) change: EventEmitter

    /**
     * @ComponentMethod
     */
    componentWillLoad() {
        this.parseItems(this.items)
    }

    /**
     * @ComponentMethod
     */
    connectedCallback() {}

     /**
     * @ComponentMethod
     */
    componentDidRender() {
        let slotElements: HTMLElement[]

        slotElements = this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]

        this.checkboxes = []

        // Get only bcm-checkbox elements from 
        // slot childs
        slotElements.map(element => {
            String(element.tagName).toLowerCase() == 'bcm-checkbox' 
                && this.checkboxes.push(element as HTMLInputElement)
        })

        this.setIndeterminateState();
    }

    /**
     * @desc
     */
    inputChange() {
        this.setIndeterminateState()
    }

    /**
     * @desc Returns merged slot and prop
     * checkbox items
     * @returns {Array<BcmCheckbox>}
     */
    getAllInputs(): Array<BcmCheckbox> {
        return [
            ...this.checkboxes, 
            ...this.el.shadowRoot.querySelectorAll('bcm-checkbox') as any
        ]
    }

    /**
     * @desc
     * @returns {void}
     */
    setIndeterminateState() {
        let state: string = 'uncheck'
        let allChecked: boolean = true
        let allUnchecked: boolean = true

        this.getAllInputs().map((checkbox) => {
            checkbox.checked && (allUnchecked = false)
            !checkbox.checked && (allChecked = false)
        });

        !allChecked && !allUnchecked 
            ? state = 'indeterminate'
            : allChecked
                ? state = 'determinate'
                : state = 'uncheck'

        this.indeterminateState = state as any;

    }

    /**
     * @desc
     * @param event 
     */
    indeterminateClick() {
        let checkAll: boolean = true

        if (this.indeterminateState == 'determinate') {
            checkAll = false
        }

        this.getAllInputs().map((checkbox) => {
            checkbox.check(checkAll)
        });
    }

    /**
     * @desc
     * @param newValue 
     * @returns {void}
     */
    @Watch('items')
    parseItems(newValue: Array<object> | string) {
        if (newValue) {
            typeof newValue == 'string'
                ? this.checkboxesProp = JSON.parse(newValue as string)
                : this.checkboxesProp = newValue
            
        }
    }

    /**
     * @desc
     * @param name -
     * @returns {boolean | Array<any>}
     */
    @Method()
    async checked(name: string) {
        let retVal: Array<any> | boolean = null
        let checkeds: Array<any> = []
        let checkboxes: Array<any> = []

        if(typeof retVal != 'boolean' && !retVal) {
            retVal = checkeds
        }

        // Merge slotted items with prop items
        // #
        checkboxes = this.getAllInputs();

        checkboxes.map(checkbox => {
            checkbox.checked && checkeds.push({
                value: true,
                name: checkbox.getAttribute('name')
            })
            
            if(checkbox.getAttribute('name') === name) {
                retVal = checkbox.checked
            }
        })
        return retVal
    }

    render() {
        const { checkboxesProp, indeterminate } = this

        const groupContainerClasses = cs(
            'group-container',
            this.direction
        )

        const indeterminateClasses = cs(
            'indeterminate',
            'bcm-' + this.indeterminateState
        )

        return(
            <Host on-bcm-change={() => this.inputChange()}>
                {/* Intedeterminate*/}
                { 
                    indeterminate && (
                        <div class={indeterminateClasses}>
                            <input
                                id="bcm-indeterminate-element"
                                type="checkbox"
                            />
                            <label 
                                htmlFor="bcm-indeterminate-element"
                                on-click={() => this.indeterminateClick()}
                            >
                                <span>
                                    <bcm-icon 
                                        class="icon-checked" 
                                        icon="component-check" 
                                        size="small" 
                                        type="default">
                                    </bcm-icon>
                                </span>
                                Check All
                            </label>
                        </div>
                    )
                }
                <div class={groupContainerClasses}>
                    {/* Items from Prop */}
                    {
                        checkboxesProp && this.checkboxesProp.map((checkbox: any) =>
                            <bcm-checkbox
                                name={checkbox.name} 
                                checked={checkbox.checked}
                                disabled={checkbox.disabled}
                            > 
                                {checkbox.label}
                            </bcm-checkbox>
                        )
                    }
                    {/* Items from Slot */}
                    <slot />
                </div>
            </Host>
        )
    }
}
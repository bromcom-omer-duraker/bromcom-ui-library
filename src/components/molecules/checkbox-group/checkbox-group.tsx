import { Element, Component, Event, EventEmitter, Prop, h, State, Watch, Method } from '@stencil/core'
import cs from 'classnames'

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
    private usingSlots: boolean = true;

    /**
     * Component Element
     */
    @Element() el: HTMLElement;

    /**
     * Component Properties
     */
    @Prop() direction: 'horizontal' | 'vertical' = 'horizontal'
    @Prop() items: Array<object> | string = [];

    /**
     * Component State Variables
     */
    @State() checkboxesProp: Array<object> = [];
    @State() test: any = [1,2,3];

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
    connectedCallback() {
    }

     /**
     * @ComponentMethod
     */
    componentDidRender() {
        let slotElements: HTMLElement[];

        slotElements = this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[];

        this.checkboxes = [];

        // Get only bcm-checkbox elements from 
        // slot childs
        slotElements.map(element => {
            String(element.tagName).toLowerCase() == 'bcm-checkbox' 
                && this.checkboxes.push(element as HTMLInputElement)
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
            ;

            // Discard slot items
            // #
            this.checkboxesProp.length > 0 && (this.usingSlots = false);
        }
    }

    /**
     * @desc
     * @param name -
     * @returns {boolean | Array<any>}
     */
    @Method()
    async checked(name: string) {
        let retVal: Array<any> | boolean = null;
        let checkeds: Array<any> = [];
        let checkboxes: Array<any> = [];

        if(typeof retVal != 'boolean' && !retVal) {
            retVal = checkeds;
        }

        // Merge slotted items with prop items
        // #
        checkboxes = [
            ...this.checkboxes, 
            ...this.el.shadowRoot.querySelectorAll('bcm-checkbox') as any
        ];

        checkboxes.map(checkbox => {
            checkbox.checked && checkeds.push({
                name: checkbox.getAttribute('name'),
                value: true
            });
            if(checkbox.getAttribute('name') === name) {
                retVal = checkbox.checked;
            }
        });
        return retVal;
    }

    render() {
        const { checkboxesProp } = this;

        const classes = cs(
            "group-container",
            this.direction
        );

        return(
            <div class={classes}>
                {
                    checkboxesProp && this.checkboxesProp.map((checkbox: any) =>
                        <bcm-checkbox
                            name={checkbox.name} 
                            checked={checkbox.checked}
                            disabled={checkbox.disabled}
                        > {checkbox.label}
                        </bcm-checkbox>
                    )
                }
                <slot />
            </div>
        )
    }
}
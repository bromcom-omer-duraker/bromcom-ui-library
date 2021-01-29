import { Component, Prop, h, Element, State, forceUpdate, Method, Listen } from '@stencil/core';
import { Directions, Direction, SizeReferences, SizeReference, IItem, StepStatuses } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-steps',
    styleUrl: 'steps.scss',
    shadow: true
})
export class BcmSteps {
    /**
     * Private variables
     */
    private initialized: boolean = false
    private firstRenderCalculation: boolean = false
    private itemLineSize: number = 0
    private initialDirection: Direction = null
    private sequentialIncrease = 1

    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'icon'                   }) icon: string = 'number'
    @Prop({ attribute: 'direction'              }) direction: Direction = Directions.horizontal
    @Prop({ attribute: 'mini'                   }) mini: boolean = false
    @Prop({ attribute: 'sequential'             }) sequential: boolean = false
    @Prop({ attribute: 'item-size-reference'    }) sizeReference: SizeReference = SizeReferences.none

    /**
     * Component States
     */
    @State() activeStep: number = 0
    @State() items: Array<IItem> = []

    /**
     * @StencilMethod
     */
    componentWillLoad() {
        this.initialDirection = this.direction
        console.log(this.sizeReference)
    }


    /**
     * @StencilMethod
     */
    componentDidRender() {

        // First init
        // #
        if (!this.initialized) {
            let slotElements: HTMLElement[]

            slotElements = this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]
    
            // Get only bcm-step elements from
            // slot childs
            slotElements.map((element: any) => {
    
                if (String(element.tagName).toLowerCase() == 'bcm-step') {
                    element.icon = this.icon
                    this.items.push({
                        el: element,
                        finished: false,
                        status: StepStatuses.waiting
                    })
                }
            })


            // Activate current step
            // #
            this.activateStep(-1, { init: true })

            forceUpdate(this.el)
            this.initialized = true
        }

        /**
         * @desc
         */
        if (!this.firstRenderCalculation && this.getDomItems().length !== 0) {
            this.calculateItemsSize()

            this.firstRenderCalculation = true
        }
    }

    /**
     * @desc
     */
    getDomItems() {
        return this.el.shadowRoot.querySelectorAll('.items .item .inner')
    }

    /**
     * @desc
     */
    getRect(element: HTMLElement) {
        return element.getBoundingClientRect()
    }

    /**
     * @desc
     * @param idx 
     */
    activateStep(idx: number = -1, { init } = { init: false }) {
        if (idx === this.activeStep) return

        idx < 0 && (idx = 0)


        // Sequential step control
        // #
        if (this.sequential && !init) {
            if (idx > this.sequentialIncrease)
                return 
            this.sequentialIncrease = this.sequentialIncrease > idx + 1 
                ? this.sequentialIncrease
                : idx + 1
        }
        
        this.activeStep = idx
        console.log(this.activeStep, this.sequentialIncrease)

        this.items.forEach((_, idx2) => {
            const item = this.items[idx2]

            // Hide all steps
            // #
            item.el.show = false
            
            // Set status finished if activated
            // #
            idx > idx2 && (item.finished = true)

            item.status = StepStatuses.none

            // Apply this settings target
            // to target step
            if (idx2 !== this.activeStep) return

            item.el.show = true
            item.el.status = StepStatuses.active
            item.status = StepStatuses.active
        }) 
    }

    /**
     * @desc
     */
    calculateItemsSize() {
        const domItems = this.getDomItems()
        const parent = this.el.parentElement;
        const rectParent = this.getRect(parent)
        let itemsTotalSize = 0
        
        Array.from(domItems).map((domItem: HTMLElement) => {
            itemsTotalSize += this.getRect(domItem).width
        })
        
        this.itemLineSize = (rectParent.width - itemsTotalSize) / domItems.length - 1
        forceUpdate(this.el)
    }

    getItemCss() {

    }

    /**
     * @desc
     * @param idx 
     */
    handleItemClick(idx: number) {
        this.activateStep(idx)
    }

    /**
     * @desc
     * @param event 
     */
    @Listen('resize', { target: 'window' })
    handleWindowResize() {
        this.calculateItemsSize()

        window.innerWidth < 520
            ? this.direction = Directions.vertical
            : this.initialDirection !== Directions.vertical && (this.direction = Directions.horizontal)
    }

    /**
     * @desc
     */
    @Method()
    async next() {
        let i = this.activeStep + 1
        
        if (i > this.items.length - 1)
            i = this.items.length - 1
        
        this.activateStep(i)
    }

    /**
     * @desc
     */
    @Method()
    async prev() {
        let i = this.activeStep - 1

        if (i < 0)
            i = 0
        
        this.activateStep(i)
    }

    render() {
        const stepsClasses = cs(
            'steps',
            [this.direction],
            {
                'mini': this.mini,
                'no-wrap-title': this.sizeReference === SizeReferences.title,
                'no-wrap-description': this.sizeReference === SizeReferences.description
            }
        )

        const iconClasses = cs(
            'icon',
            {
                dot: this.icon === 'dot',
                number: this.icon === 'number',
                'with-icon': this.icon !== 'dot' && this.icon !== 'number'
            }
        )

        return (
            <div class={stepsClasses}>
                <div class="items">
                    {this.items.map((item, idx) => (
                        <div
                            class={'item ' + [item.status] + ' ' + [item.finished ? 'finished' : ''] + ' ' + (this.icon === 'dot' ? 'dot' : '' )}
                            onClick={() => this.handleItemClick(idx)}
                        >
                            <div class="inner">
                                <div class="item-header">
                                    <div class={iconClasses}>
                                    {
                                            item.status !== StepStatuses.finished 
                                                ? (
                                                    <span>
                                                        {
                                                            this.icon === 'number' && (idx + 1)
                                                        }
                                                        {
                                                            this.icon === 'dot' && (
                                                                <span class="dot"></span>
                                                            )
                                                        }
                                                        {
                                                            this.icon !== 'number' && this.icon !== 'dot' && (
                                                                <bcm-icon icon={this.icon} size={24}></bcm-icon>
                                                            )
                                                        }
                                                    </span>
                                                )
                                                : (
                                                    <bcm-icon icon="check" color="prime-blue-6"></bcm-icon>
                                                )
                                        }
                                    </div>
                                    <div class="title">{item.el.title}</div>
                                    <div class="line"></div>
                                    {
                                        this.icon === 'dot' && (
                                            <div class="line-2"></div>
                                        )
                                        
                                    }
                                </div>
                                <div class="description">
                                    {item.el.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="contents">
                    <slot />
                </div>
            </div>
        )
    }
}
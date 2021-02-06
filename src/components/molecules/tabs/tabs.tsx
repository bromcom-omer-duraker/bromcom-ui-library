import { Component, Prop, h, Element, Event, EventEmitter, State, Watch, forceUpdate, Listen } from '@stencil/core'
import { SizeProp, SizeProps, TypeProp, TypeProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-tabs',
    styleUrl: 'tabs.scss',
    shadow: true
})
export class BcmTabs {
    /**
     * Component Private variables
     */
    private tabs: Array<HTMLElement> = []
    private firstInit: boolean = true
 
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'size' }) size: SizeProp = SizeProps.large
    @Prop({ attribute: 'type' }) type: TypeProp = TypeProps.normal

    /**
     * Component States
     */
    @State() activeChild: number = 1
    @State() lineOpts: { top: string; left: string; width: string } = { top: '0px', left: '0px', width: '0px' }

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-click'     }) click: EventEmitter
    @Event({ eventName: 'bcm-change'    }) change: EventEmitter

    /**
     * @ComponentMethod
     */
    componentDidRender() {
        if (!this.firstInit) return

        let slotElements: HTMLElement[]
        slotElements = this.el.shadowRoot.querySelector('slot').assignedElements() as HTMLElement[]

        this.tabs = []

        // Get only bcm-tab elements from 
        // slot childs
        slotElements.map((element: any) => {

            if (String(element.tagName).toLowerCase() == 'bcm-tab') {

                element.type = this.type

                // Activate default tab
                // #
                if (this.tabs.push(element as HTMLInputElement) - 1 == this.activeChild) {
                    this.activateChild(this.activeChild)
                }
            }
        })

        setTimeout(() => {
            this.el.shadowRoot.querySelector('.tabs').classList.add('animatable')
        }, 500)
    }

    /**
     * @desc
     */
    getChildIdx(child: HTMLElement) {
        let i: number = 1

        while (child.previousElementSibling) {
            child = child.previousElementSibling as HTMLElement
            i++
        }
        return i
    }   

    /**
     * @desc
     * @param idx 
     */
    activateChild(idx: number) {
        idx = idx - 1
        const child: any = this.tabs[idx]

        this.tabs.forEach((tab: any) => tab.active = false)
        child.active = true

        this.transformLine(idx)
        this.firstInit && forceUpdate(this.el)
        this.firstInit = false        

    }

    /**
     * @desc
     * @param idx 
     */
    transformLine(idx: number) {
        const tab = this.tabs[idx]
        this.lineOpts.top = (tab.offsetTop + tab.offsetHeight) + 'px'
        this.lineOpts.left = tab.offsetLeft + 'px'
        this.lineOpts.width = tab.offsetWidth + 'px'
    }

    /**
     * @desc
     */
    getLineTransform() {
        return {
            '--bcm-tabs-line-top': this.lineOpts.top, 
            '--bcm-tabs-line-left': this.lineOpts.left, 
            '--bcm-tabs-line-width': this.lineOpts.width
        }
    }

    /**
     * @desc
     * @param event 
     */
    handleTabClick(event: MouseEvent) {
        const targetElement: HTMLElement = event.target as HTMLElement
        const childIdx: number = this.getChildIdx(targetElement)

        this.activeChild = childIdx
    }

    /**
     * @desc
     * @param event 
     */
    handleTabClose(event: MouseEvent) {
        const targetElement: HTMLElement = event.target as HTMLElement
        const childIdx: number = this.getChildIdx(targetElement)

        // Remove element
        // #
        targetElement.remove()
        this.tabs.splice(childIdx - 1, 1);

        if (childIdx === this.activeChild) {
            this.activeChild = 1
            this.activateChild(1)
        }
    }

    /**
     * @desc
     * @param newValue 
     */
    @Watch('activeChild')
    activeChildChange(newValue: number) {
        this.activateChild(newValue)
        this.change.emit(newValue)
    }

    /**
     * @desc
     */
    @Listen('resize', { target: 'window' })
    windowResize() {
        this.transformLine(this.activeChild - 1)
        forceUpdate(this.el)
    }

    render() {
        const classes = cs(
            'tabs',
            [this.size],
            [this.type]
        )

        return (
            <div
                class={classes}
                style={this.getLineTransform()}
                on-bcm-click={(event) => this.handleTabClick(event)}
                on-bcm-close={(event) => this.handleTabClose(event)}>
                <slot />
            </div>
        )
    }
}

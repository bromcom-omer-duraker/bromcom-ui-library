import { Component, h, Element, Host, Prop, State, Listen } from '@stencil/core'
import { Direction, Directions } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-slider',
    styleUrl: 'slider.scss',
    shadow: true
})
export class BcmSlider {
    private thumb: HTMLElement
    private track: HTMLElement
    private mouseDown: boolean = false

    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'min' }) min: number = 0
    @Prop({ attribute: 'max' }) max: number = 13 // temp
    @Prop({ attribute: 'value' }) value: number = 5
    @Prop({ attribute: 'direction' }) direction: Direction = Directions.horizontal

    /**
     * Component States
     */
    @State() steps: Array<number> = []

    /**
     * @ComponentMethod
     */
    componentWillRender() {
        // Fill steps
        // #
        this.steps = Array.from(
            { length: this.max + 1 }, 
            (_, idx) => idx
        )
    }

    /**
     * @desc
     * @param element 
     */
    elementRect(element: HTMLElement) {
        return element.getBoundingClientRect()
    }

    /**
     * @desc
     * @param mouseEvent 
     * @param element 
     */
    calculateOffsets(mouseEvent: MouseEvent, element: any) {
        const elRect: any = this.elementRect(element)
        const mouseX: number = Math.floor(mouseEvent.clientX)
        const mouseY: number = Math.floor(mouseEvent.clientY)
        const elPageX: number = Math.floor(elRect.x)
        const elPageY: number = Math.floor(elRect.y)
        const elDragPointX: number = mouseX - (elPageX + (elRect.width / 2))
        const elDragPointY: number = mouseY - (elPageY + (elRect.height / 2))

        return {
            rect: elRect,
            mouseX: mouseX,
            mouseY: mouseY,
            elPageX: elPageX,
            elPageY: elPageY,
            elDragPointX: elDragPointX,
            elDragPointY: elDragPointY
        }
    }

    /**
     * @desc
     */
    getThumbTransform() {
        let transform: string
        let values: Array<string> | string

        transform = getComputedStyle(this.thumb).getPropertyValue('transform')
        values = transform.replace(/(matrix|\(|\)|px)/g, '')
        values = values.split(', ')

        return { x: values[4], y: values[5] }
    }

    /**
     * @desc
     * @param event 
     */
    @Listen('mousemove', { target: 'window' })
    handleMouseMove(event: MouseEvent) {
        if (!this.mouseDown) return

        const offsets: any = this.calculateOffsets(event, this.thumb)
        const trackRect: any = this.elementRect(this.track)
        const thumbRect: any = this.elementRect(this.thumb)
        const thumbTransform: any = this.getThumbTransform()
        const isHorizontal: boolean = this.direction === Directions.horizontal

        const directionSize = isHorizontal
            ? 'width'
            : 'height'
        
        // Determine sliding positive or 
        // negative direction
        const movingPositive: boolean = isHorizontal
            ? offsets.elDragPointX > 0
            : offsets.elDragPointY > 0
        
        // Find Which direction value 
        // needed
        const movingDirectionValue = isHorizontal
            ? offsets.elDragPointX
            : offsets.elDragPointY

        // Current thumb css position
        // #
        let thumbMovingPos: number = parseInt(isHorizontal
            ? thumbTransform.x
            : thumbTransform.y
        )
        
        movingPositive
            ? (thumbMovingPos += movingDirectionValue)
            : (thumbMovingPos -= -movingDirectionValue)
        
        // Restrict thumb position
        // #
        if ((thumbMovingPos <= (trackRect[directionSize] - (thumbRect[directionSize] / 2)) && thumbMovingPos >= -(thumbRect[directionSize] / 2)))
            this.thumb.style.transform = isHorizontal
                ? `translate(${thumbMovingPos}px, -50%)`
                : `translate(-50%, ${thumbMovingPos}px)`
    }

    /**
     * @desc
     * @param event 
     */
    @Listen('mouseup', { target: 'window' })
    handleMouseUp(event: MouseEvent) {
        this.mouseDown = false
    }

    /**
     * @desc
     * @param event 
     */
    handleMouseDown(event: MouseEvent) {
        this.mouseDown = true
        console.log('down', event)
    }

    render() {
        const sliderClasses = cs(
            'slider', 
            [this.direction]
        )

        return (
            <Host>
                <div class={sliderClasses}>
                    {/* Control Left/Top */}
                    <button class="button-control lt">
                        <bcm-icon
                            icon={this.direction === Directions.horizontal ? 'caret-left' : 'caret-up'} 
                            type="fill">
                        </bcm-icon>
                    </button>

                    {/* Track */}
                    <div class="track-container">
                        <div 
                            class="track"
                            ref={el => (this.track = el)}
                        >
                            {/* Track Thumb */}
                            <div
                                class="thumb"
                                ref={el => (this.thumb = el)}
                                onMouseDown={(e) => this.handleMouseDown(e)}
                            >
                            </div>
                            
                            {/* Steps */}
                            <div class="steps">
                               {
                                   this.steps.map(step => (
                                       <span class="step">
                                           <span class="label">{step}</span>
                                       </span>
                                   ))
                               }
                            </div>
                        </div>
                    </div>

                    {/* Control Right/Bottom */}
                    <button class="button-control rb">
                        <bcm-icon
                            icon={this.direction === Directions.horizontal ? 'caret-right' : 'caret-down'} 
                            type="fill">
                        </bcm-icon>
                    </button>
                </div>
            </Host>
        )
    }
}

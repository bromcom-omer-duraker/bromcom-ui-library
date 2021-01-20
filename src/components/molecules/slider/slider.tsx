import { Component, h, Element, Host, Prop, State, Listen } from '@stencil/core'
import { Direction, Directions, IAxisKeys, IThumbsOrder, ITransformPositions, IDragPoint } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-slider',
    styleUrl: 'slider.scss',
    shadow: true
})
export class BcmSlider {
    private fill: HTMLElement
    private track: HTMLElement
    private thumb: HTMLElement
    private thumb2: HTMLElement
    private current: HTMLElement
    private activeThumb: HTMLElement
    private mouseDown: boolean = false
    private initialized: boolean = false
    private hiddenTimeout: any = null
    
    /**
     * Component Element
     */
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'min'            }) min: number = 1
    @Prop({ attribute: 'max'            }) max: number = 10
    @Prop({ attribute: 'range'          }) range: boolean = false
    @Prop({ attribute: 'range-start'    }) rangeStart: number = 1
    @Prop({ attribute: 'range-end'      }) rangeEnd: number = 2
    @Prop({ attribute: 'label-prefix'   }) labelPrefix: string = ''
    @Prop({ attribute: 'label-suffix'   }) labelSuffix: string = ''
    @Prop({ attribute: 'step'           }) step : number = 1
    @Prop({ attribute: 'value'          }) value: number | Array<number> = 0
    @Prop({ attribute: 'direction'      }) direction: Direction = Directions.horizontal

    /**
     * Component States
     */
    @State() items: Array<any> = []
    @State() currentContent: string = ''

    /**
     * @ComponentMethod
     */
    componentWillLoad() {
        const { min, max, step, labelPrefix, labelSuffix } = this

        // Fill steps
        // #
        this.items = this.generateRange(min, max, step).map(
            item => labelPrefix + item + labelSuffix 
        )
    }


    /**
     * @ComponentMethod
     */
    componentDidRender() {
        if (this.initialized) return
        !this.activeThumb && (this.activeThumb = this.thumb)

        if (this.range) {
            this.changeValue(this.rangeEnd - 1, this.thumb2)
            this.changeValue(this.rangeStart - 1, this.thumb)
        } else {
            this.changeValue((this.value as number - 1))
        }
        this.initialized = true
    }

    /**
     * 
     * @param min 
     * @param max 
     * @param step 
     */
    generateRange(min: number, max: number, step: number){
        let arr = [];
        for(let i: number = min; i <= max; i += step){
           arr.push(i);
        }
        
        return arr;
      }

    /**
     * @desc
     * @param element 
     */
    getRect(element: HTMLElement): DOMRect {
        return element.getBoundingClientRect()
    }

    /**
     * @desc
     * @param element 
     */
    getTransform(element: HTMLElement): ITransformPositions {
        let transform: string = getComputedStyle(element).getPropertyValue('transform')
        let values: Array<string> | string

        values = transform.replace(/(matrix|\(|\)|px)/g, '')
        values = values.split(', ')

        return { x: parseInt(values[4]), y: parseInt(values[5]) }
    }

    /**
     * @desc
     */
    keysByAxis(): IAxisKeys {
        const isHorizontal = this.direction === Directions.horizontal
        
        return {
            pos: isHorizontal ? 'left' : 'top',
            size: isHorizontal ? 'width' : 'height',
            coord: isHorizontal ? 'x' : 'y',
            posOffset: isHorizontal ? 'offsetLeft' : 'offsetTop'
        }
    }

    /**
     * @desc
     * @param mouseEvent 
     * @param element 
     */
    getDragPoint(event: MouseEvent, element: HTMLElement): IDragPoint {
        const rectElement: DOMRect = this.getRect(element)

        return {
            x: Math.floor(event.clientX) - (rectElement.x + (rectElement.width / 2)),
            y: Math.floor(event.clientY) - (rectElement.y + (rectElement.height / 2))
        }
    }

    /**
     * @desc
     * @param event 
     */
    setThumbPosition(event: MouseEvent): void {
        const isHorizontal: boolean = this.direction === Directions.horizontal
        const axisKeys: IAxisKeys = this.keysByAxis()
        const rectTrack: DOMRect = this.getRect(this.track)
        const rectThumb: DOMRect = this.getRect(this.activeThumb)
        const dragPoint: IDragPoint = this.getDragPoint(event, this.activeThumb)
        const transformThumb: ITransformPositions = this.getTransform(this.activeThumb)

        // Determine sliding positive or 
        // negative direction
        const movingPositive: boolean = dragPoint[axisKeys.coord] > 0
        
        // Find Which direction value 
        // needed
        const movingDirectionValue = dragPoint[axisKeys.coord]

        // Current thumb css position
        // #
        let thumbMovingPos: number = transformThumb[axisKeys.coord]

        movingPositive
            ? (thumbMovingPos += movingDirectionValue)
            : (thumbMovingPos -= -movingDirectionValue)
        
        // Restrict thumb position
        // #
        if ((thumbMovingPos <= (rectTrack[axisKeys.size] - (rectThumb[axisKeys.size] / 2)) && thumbMovingPos >= -(rectThumb[axisKeys.size] / 2)))
            this.activeThumb.style.transform = isHorizontal
                ? `translate(${thumbMovingPos}px, -50%)` // horizontal
                : `translate(-50%, ${thumbMovingPos}px)` // vertical
    }

    /**
     * @desc
     */
    getThumbsOrder(): IThumbsOrder {
        const axisKeys: IAxisKeys = this.keysByAxis()
        const transformThumb1: ITransformPositions = this.getTransform(this.thumb)
        const transformThumb2: ITransformPositions = this.getTransform(this.thumb2)

        if (transformThumb1[axisKeys.coord] >= transformThumb2[axisKeys.coord]) 
             return { first: this.thumb2, second: this.thumb }
        else return { first: this.thumb, second: this.thumb2 }
    }

    /**
     * @desc
     */
    setFillPosition(): void {
        const axisKeys: IAxisKeys = this.keysByAxis()
        const style: CSSStyleDeclaration = this.fill.style

        if (this.range) {
            const thumbs: IThumbsOrder = this.getThumbsOrder()
            const thumbFirst: ITransformPositions = this.getTransform(thumbs.first)
            const thumbSecond: ITransformPositions = this.getTransform(thumbs.second)
            
            style[axisKeys.pos] = `${thumbFirst[axisKeys.coord]}px`
            style[axisKeys.size] = `${thumbSecond[axisKeys.coord] - thumbFirst[axisKeys.coord]}px`
        }
        else {
            const transformThumb: ITransformPositions = this.getTransform(this.activeThumb)
            style[axisKeys.size] = `${transformThumb[axisKeys.coord]}px`
        }
    }

    /**
     * @desc
     */
    setCurrentPosition(): void {
        const axisKeys: IAxisKeys = this.keysByAxis()
        const rectFill: DOMRect = this.getRect(this.fill)
        const rectCurrent: DOMRect = this.getRect(this.current)
        const thumb: HTMLElement = this.range ? this.getThumbsOrder().first : this.activeThumb
        const transformThumb: ITransformPositions = this.getTransform(thumb)
        
        let style: string = ''

        this.range
            ? (style = `${transformThumb[axisKeys.coord] + (rectFill[axisKeys.size] / 2) - (rectCurrent[axisKeys.size] / 4)}px`)
            : (style = `${transformThumb[axisKeys.coord] - (rectCurrent[axisKeys.size] / 4)}px`)
 
        this.current.style[axisKeys.pos] = style
    }

    /**
     * @desc
     * @param visible 
     */
    setCurrentVisibilty(visible: boolean): void {
        const classList = this.current.classList

        // Toggle shown class
        // #
        classList[visible ? 'add' : 'remove']('shown')
        
        // Handle smooth animation
        // #
        classList.remove('in-hidden')
        this.hiddenTimeout && clearTimeout(this.hiddenTimeout)
        
        if (!visible) {
            this.hiddenTimeout = setTimeout(() => {
                classList.add('in-hidden')
                this.hiddenTimeout = null
            }, 1100)
        }
    }

    /**
     * @desc
     * @param thumb
     */
    calculateValue(thumb: HTMLElement = this.activeThumb): number {
        if (!thumb) return

        const axisKeys: IAxisKeys = this.keysByAxis()
        const rectTrack: DOMRect = this.getRect(this.track)
        const rectThumb: DOMRect = this.getRect(thumb)
        const transformThumb: ITransformPositions = this.getTransform(thumb)

        // Calculate exact value from
        // thumb position
        let value = Math.floor((
            transformThumb[axisKeys.coord] + 
            (rectThumb[axisKeys.size] / 2) + 1) / 
            (rectTrack[axisKeys.size] / (this.items.length))
        )
        
        if (value > this.items.length - 1 )
            value = this.items.length - 1

        return value
    }

    /**
     * @desc
     * @param idx 
     * @param thumb 
     */
    changeValue(idx: number, thumb: HTMLElement = this.activeThumb): void {
        if (idx < 0 || idx > this.items.length - 1) return
        
        const axisKeys: IAxisKeys = this.keysByAxis()
        const isHorizontal: boolean = this.direction === Directions.horizontal
        const stepElements: NodeListOf<HTMLElement> = this.el.shadowRoot.querySelectorAll('.step')
        const rectThumb: DOMRect = this.getRect(thumb)
        const targetStepElement: HTMLElement = stepElements[idx]
        const thumbMovingPos = targetStepElement[axisKeys.posOffset] - (rectThumb[axisKeys.size] / 2)

        thumb.style.transform = isHorizontal
            ? `translate(${thumbMovingPos}px, -50%)`
            : `translate(-50%, ${thumbMovingPos}px)`
        
        this.updateValue()
        this.setFillPosition()
    }

    /**
     * @desc
     */
    updateValue() {
        if (!this.range) {
            this.value = this.calculateValue()
        }

        if (this.range) {
            const thumbs: IThumbsOrder = this.getThumbsOrder()

            this.value = [
                this.calculateValue(thumbs.first),
                this.calculateValue(thumbs.second)
            ]
        }

        console.log( this.value)
    }

    /**
     * @desc
     * @param value 
     */
    idxBounds(value: number) {
        return value > this.items.length - 1 
            ? this.items.length - 1  
            : value < 0  
                ? 0 
                : value
    }

    /**
     * @desc
     */
    getCurrentContent() {
        if (!this.thumb) return
        let content: string = ''

        if (this.range) {
            const thumbs: IThumbsOrder = this.getThumbsOrder()
            const valueFirstThumb = this.calculateValue(thumbs.first)
            const valueSecondThumb = this.calculateValue(thumbs.second)

            content = `
                ${this.items[this.idxBounds(valueFirstThumb)]} - 
                ${this.items[this.idxBounds(valueSecondThumb)]}`
        }
        else {
            content = this.items[this.idxBounds(this.value as number)]
        }
    
        this.currentContent = content
    }

    /**
     * @desc
     * @param type 
     */
    buttonChange(type: string): void {
        const value = this.calculateValue()

        this.changeValue(type === 'increase'
            ? value + 1
            : value - 1 
        )

        this.setCurrentPosition()
    }

    /**
     * @desc
     * @param event 
     */
    @Listen('mousemove', { target: 'window' })
    handleMouseMove(event: MouseEvent): void {
        if (!this.mouseDown) return

        // Set elements position 
        // #
        this.setThumbPosition(event)
        this.setFillPosition()
        this.setCurrentPosition()

        // Update value
        // #
        this.updateValue()

        this.getCurrentContent()

        // Show current popup while
        // user sliding
        this.setCurrentVisibilty(true)
    }

    /**
     * @desc
     * @param event 
     */
    @Listen('mouseup', { target: 'window' })
    handleMouseUp(): void {
        if (this.mouseDown) {
            this.changeValue(this.calculateValue())
            this.setCurrentPosition()
            this.setCurrentVisibilty(false)
        }

        this.mouseDown = false
    }

    /**
     * @desc
     * @param event 
     */
    handleMouseDown(thumb: string): void {
        this.mouseDown = true
        this.activeThumb = thumb == 'thumb-1'
            ? this.thumb
            : this.thumb2
        ;
    }

    render() {
        const sliderClasses = cs(
            'slider', 
            [this.direction],
            {
                range: this.range
            }
        )

        return (
            <Host>
                <div class={sliderClasses}>
                    {/* Control Left/Top */}
                    <button
                        class="button-control"
                        onClick={_ => this.buttonChange('decrease')}
                    >
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
                            {/* Fill */}
                            <div 
                                class="fill"
                                ref={el => (this.fill = el)}
                            >
                            </div>

                            {/* Current Value */}
                            <div
                                class="current in-hidden"
                                ref={el => (this.current = el)}
                            >
                                <div class="inner">{this.currentContent}</div>
                            </div>

                            {/* Track Thumbs */}
                            <div
                                class="thumb thumb-1"
                                ref={el => (this.thumb = el)}
                                onMouseDown={() => this.handleMouseDown('thumb-1')}
                            >
                            </div>

                            <div
                                class="thumb thumb-2"
                                ref={el => (this.thumb2 = el)}
                                onMouseDown={() => this.handleMouseDown('thumb-2')}
                            >
                            </div>
                            
                            {/* Steps */}
                            <div class="steps">
                               {
                                   this.items.map(item => (
                                       <span class="step">
                                           <span class="label">{item}</span>
                                       </span>
                                   ))
                               }
                            </div>
                        </div>
                    </div>

                    {/* Control Right/Bottom */}
                    <button
                        class="button-control"
                        onClick={_ => this.buttonChange('increase')}
                    >
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

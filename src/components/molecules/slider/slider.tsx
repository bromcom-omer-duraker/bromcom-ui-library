import { Component, h, Element, Host, Prop, State } from '@stencil/core'
import { Direction, Directions } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-slider',
    styleUrl: 'slider.scss',
    shadow: true
})
export class BcmSlider {
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
                        <div class="track">
                            <div class="steps">
                               {
                                   this.steps.map(step => (
                                       <span class="step">{step}</span>
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

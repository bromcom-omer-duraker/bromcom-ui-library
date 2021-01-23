import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'
import { ColorPaletteTypes } from '../../../global/variables/colors'

export declare type statusType =
    | 'success'
    | 'info'
    | 'warning'
    | 'error'

const statuses = {
    success: ['check-circle', 'green-6'],
    info: ['info-circle', 'blue-6'],
    warning: ['warning', 'warmyellow-6'],
    error: ['close-circle', 'grey-10'],
}

@Component({
    tag: 'bcm-result',
    styleUrl: 'result.scss',
    shadow: true
})
export class BcmResult {

    @Prop() status: statusType = 'success'
    @Prop() heading: string
    @Prop() desc: string
    
    /**
    * These event and prop names must change.
    * ..Start.. 
    */

    @Prop() primaryButtonText: string = ''
    @Prop() secondaryButtonText: string = ''
    
    @Event({ eventName: 'bcm-pb-click' }) pClick: EventEmitter
    @Event({ eventName: 'bcm-sb-click' }) sClick: EventEmitter

    handlePClick() {
        this.pClick.emit()
    }

    handleSClick() {
        this.sClick.emit()
    }

    /**
    * ..End..
    */

    getIcon() {
        const [icon, color] = statuses[this.status]

        return (
            <bcm-icon icon={icon} color={color as ColorPaletteTypes} type="fill" size={72}></bcm-icon>
        )
    }

    render() {
        return (
            <div class="result">
                <div class="icon">
                    {this.getIcon()}
                </div>

                <div class="content">
                    <span class="heading size-5 weight-semibold">{this.heading}</span>
                    <span class="desc size-2">{this.desc}</span>

                    <div class="extra">
                        <slot />
                    </div>

                    <div class="buttons">
                        {this.primaryButtonText && <bcm-button onClick={() => this.handlePClick()}>{this.primaryButtonText}</bcm-button>}
                        {this.secondaryButtonText && <bcm-button onClick={() => this.handleSClick()} outline>{this.secondaryButtonText}</bcm-button>}
                    </div>
                </div>
            </div>
        )
    }
}
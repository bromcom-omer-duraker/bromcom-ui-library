import { Component, Prop, h, Watch } from '@stencil/core';
import { StepStatuses } from './types';
import cs from 'classnames'

@Component({
    tag: 'bcm-step',
    styleUrl: 'step.scss',
    shadow: true
})
export class BcmStep {

    /**
     * Component Properties
     */
    @Prop({ attribute: 'icon'           }) icon: string
    @Prop({ attribute: 'description'    }) description: string
    @Prop({ attribute: 'status'         }) status: StepStatuses
    @Prop({ attribute: 'show'           }) show: boolean = false

    @Watch('status')
    statusChange(newValue) {
        console.log(newValue)
    }

    render() {
        const classes = cs(
            'step',
            [this.status],
            {
                show: this.show
            }
        )

        return (
            <div class={classes}>
                <div class="content">
                    <slot />
                </div>
            </div>
        )
    }
}

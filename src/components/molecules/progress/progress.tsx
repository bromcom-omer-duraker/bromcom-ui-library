import { Component, h, Method, Prop, State, Watch } from '@stencil/core'
import cs from 'classnames'
import { ColorPaletteTypes } from '../../../global/variables/colors'

const icons = {
    completed: ['check-circle', 'green-6'],
    notCompleted: ['close-circle', 'grey-10']
}

const sizes = {
    small: ['size-1', 14],
    medium: ['size-2', 16]
}

@Component({
    tag: 'bcm-progress',
    styleUrl: 'progress.scss',
    shadow: true
})
export class BcmProgress {

    @Prop({ mutable: true, reflect: true }) percent: number = 0
    @Prop() size: 'small' | 'medium' = 'medium'
    @Prop() type: 'line' | 'line-rounded' | 'circle'
    @Prop() infoType: 'percent' | 'icon' = 'percent'

    @State() isCompleted: boolean = false

    @Watch('percent')
    maxPercent(newValue) {
        if (newValue >= 100) {
            this.percent = 100
            this.isCompleted = true
        }

        if (newValue < 100) {
            this.isCompleted = false
        }

        if (newValue <= 0) {
            this.percent = 0
        }
    }

    @Method()
    async increment(percent: number) {
        this.percent += percent
    }

    @Method()
    async decrement(percent: number) {
        this.percent -= percent
    }

    displayValue() {
        const [textSize, iconSize] = sizes[this.size]

        if (this.infoType === 'percent') {
            return (
                <span class={textSize + ' value'}>{this.percent}%</span>
            )
        }

        else {
            const completed = this.isCompleted ? 'completed' : 'notCompleted'
            const [icon, color] = icons[completed]

            return (
                <bcm-icon class="value" icon={icon} color={color as ColorPaletteTypes} size={iconSize as number} type="fill"></bcm-icon>
            )
        }
    }

    componentWillLoad() {
        this.maxPercent(this.percent)
    }

    render() {

        const isIcon = this.infoType === 'icon'

        const classes = cs(
            'progress',
            this.size,
            this.type,
            {
                'completed': isIcon && this.isCompleted,
                'not_completed': isIcon && !this.isCompleted
            }
        )

        return (
            <div class="progress-container">
                <progress class={classes} value={this.percent} max={100}></progress>
                {this.displayValue()}
            </div>
        )
    }
}
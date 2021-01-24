import { Component, h, Method, Prop, State, Watch, Element } from '@stencil/core'
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

const circleIcons = {
    completed: ['check', 'green-6'],
    notCompleted: ['close', 'grey-10']
}

/*
    size(width-height), radius, text-size, icon-size
*/
const circleSizes = {
    small: [80, 36, 'size-3', 22],
    medium: [120, 52, 'size-5', 30]
}

@Component({
    tag: 'bcm-progress',
    styleUrl: 'progress.scss',
    shadow: true
})
export class BcmProgress {

    @Element() host: HTMLElement

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

    @Method()
    async setPercent(percent: number) {
        this.percent = percent
    }

    displayValue() {
        const [textSize, iconSize] = sizes[this.size]

        if (this.infoType === 'percent') {
            return (
                <text class={textSize + ' value'}>{this.percent}%</text>
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

    componentDidRender() {
        const circle = this.host.shadowRoot.querySelector('#circle') as SVGCircleElement

        if (circle) {
            const radius = circle.r.baseVal.value
            const circumference = radius * 2 * Math.PI
            const offset = circumference - this.percent / 100 * circumference;

            circle.style.strokeDasharray = `${circumference} ${circumference}`
            circle.style.strokeDashoffset = `${circumference}`

            circle.style.strokeDashoffset = `${offset}`;
        }
    }

    render() {

        const isIcon = this.infoType === 'icon'
        const completed = this.isCompleted ? 'completed' : 'notCompleted'
        const [icon, color] = circleIcons[completed]
        const [size, r, textSize, iconSize] = circleSizes[this.size]
        const xy = size as number / 2

        const completeState = {
            'completed': isIcon && this.isCompleted,
            'not_completed': isIcon && !this.isCompleted
        }

        const classes = cs(
            'progress',
            this.size,
            this.type,
            completeState
        )

        const circleClasses = cs(
            'progress-circle',
            'bar',
            completeState
        )

        const containerStyle = {
            width: `${size}px`,
            height: `${size}px`
        }

        if (this.type === 'circle') {
            return (
                <div class="progress-circle-container" style={containerStyle}>
                    <svg width={size} height={size}>
                        <circle class="progress-circle" r={r} cx={xy} cy={xy} />
                        <circle id="circle" class={circleClasses} r={r} cx={xy} cy={xy} />
                        {this.infoType === 'percent' && <text x={xy} y={xy} text-anchor="middle" class={textSize as string} alignment-baseline="middle">{this.percent}%</text>}
                    </svg>
                    {this.infoType === 'icon' && <bcm-icon icon={icon} color={color as ColorPaletteTypes} size={iconSize as number}></bcm-icon>}
                </div>
            )
        }

        return (
            <div class="progress-container">
                <progress class={classes} value={this.percent} max={100}></progress>
                {this.displayValue()}
            </div>
        )
    }
}

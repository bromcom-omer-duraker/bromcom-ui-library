import { Component, h, Method, Prop, State, Watch, Element } from '@stencil/core'
import cs from 'classnames'

const sizes = {
    small: ['size-1', 14],
    medium: ['size-2', 16]
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
    @Prop() type: 'line' | 'line-rounded' | 'circle' = 'line-rounded'
    @Prop() info: 'percent' | 'icon' = 'icon'
    @Prop() error: boolean = false

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
        !this.error && (this.percent += percent)
    }

    @Method()
    async decrement(percent: number) {
        !this.error && (this.percent -= percent)
    }

    @Method()
    async setPercent(percent: number) {
        !this.error && (this.percent = percent)
    }

    displayValue() {
        const [textSize, iconSize] = sizes[this.size]

        if (this.error) {
            return (
                <bcm-icon class="value" icon="close-circle" color="grey-10" size={iconSize as number} type="fill"></bcm-icon>
            )
        }

        else if (this.info === 'percent' || !this.isCompleted) {
            return (
                <text class={textSize + ' value'}>{this.percent}%</text>
            )
        }

        return (
            <bcm-icon class="value" icon="check-circle" color="green-6" size={iconSize as number} type="fill"></bcm-icon>
        )
    }

    displayCircleIcon() {
        const iconSize = circleSizes[this.size][3]

        if (this.error) {
            return (
                <bcm-icon icon="close" color="grey-10" size={iconSize as number}></bcm-icon>
            )
        }

        else if (this.info === 'icon' && this.isCompleted) {
            return (
                <bcm-icon icon="check" color="green-6" size={iconSize as number}></bcm-icon>
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

        const isIcon = this.info === 'icon'
        const [size, r, textSize] = circleSizes[this.size]
        const xy = size as number / 2

        const completeState = {
            'completed': isIcon && this.isCompleted,
            'error': this.error
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
                        {(this.info === 'percent' || !this.isCompleted) && !this.error && <text x={xy} y={xy} text-anchor="middle" class={textSize as string} alignment-baseline="middle">{this.percent}%</text>}
                    </svg>
                    {this.displayCircleIcon()}
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

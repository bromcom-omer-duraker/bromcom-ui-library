import { Component, Prop, h, Element, State } from '@stencil/core'
import { StatusProp, StatusProps, TypeProp, TypeProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-alert',
    styleUrl: 'alert.scss',
    shadow: true
})
export class BcmAlert {
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'}) _title: string
    @Prop() status?: StatusProp = StatusProps.info
    @Prop() type?: TypeProp = TypeProps.basic
    @Prop({ reflect: true }) dissmisable?: string | boolean = false
    @Prop() icon?: boolean = false
    @Prop({ attribute: 'big-icon' }) bigIcon?: boolean = false
    
    /**
     * Component States
     */
    @State() hasSlot: boolean = false

    /**
     * @desc
     */
    componentDidRender() {
        this.hasSlot = !!this.el.shadowRoot.querySelector('slot').assignedNodes().length
    }

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getIcon() {
        switch (this.status) {
            case StatusProps.info:
                return <bcm-icon type="fill" icon="info-circle" size={14} color="blue-6" />
            case StatusProps.error:
                return <bcm-icon type="fill" icon="close-circle" size={14} color="red-6" />
            case StatusProps.warning:
                return <bcm-icon type="fill" icon="exclamation-circle" size={14} color="warmyellow-6" />
            case StatusProps.success:
                return <bcm-icon type="fill" icon="check-circle" size={14} color="green-6" />
        }
    }

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getBigIcon() {
        switch (this.status) {
            case StatusProps.info:
                return <bcm-icon type="outlined" icon="info-circle" size="medium" color="prime-blue-6" />
            case StatusProps.error:
                return <bcm-icon type="outlined" icon="close-circle" size="medium" color="red-6" />
            case StatusProps.warning:
                return <bcm-icon type="outlined" icon="exclamation-circle" size="medium" color="warmyellow-6" />
            case StatusProps.success:
                return <bcm-icon type="outlined" icon="check-circle" size="medium" color="green-6" />
        }
    }

    /**
     * @desc
     * @returns {BcmIcon|string}
     */
    getDismiss() {
        let dismiss = '';
        typeof this.dissmisable === 'string' && this.dissmisable === ''
            ? dismiss = <bcm-icon 
                class="dismiss"
                icon="close"
                color="grey-10"
                onClick={() => this.dismiss()}></bcm-icon>

            : dismiss = <span
                class="dismiss"
                onClick={() => this.dismiss()}>{this.dissmisable}</span>
            
        return dismiss;
    }

    /**
     * @desc Removes component itself
     */
    dismiss() {
        this.el.remove()
    }

    render() {
        const { status, type, icon, bigIcon, hasSlot, _title } = this
        const alertClasses = cs(
            'alert',
            type,
            status,
            {
                'has-slot': hasSlot
            }
        )
        return (
            <div class={alertClasses}>
                { bigIcon && (
                    <div class="icon-content">{this.getBigIcon()}</div>
                )
                }
                <div class="text-content">
                    <span class="title">
                        {icon && this.getIcon()} {_title} {this.getDismiss()}
                    </span>
                    <p class={{'visible': hasSlot}}>
                        <slot />
                    </p>
                </div>
            </div>
        )
    }
}

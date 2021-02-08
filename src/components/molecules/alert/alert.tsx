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
    @Prop() dissmisable?: string | boolean = false
    @Prop() icon?: boolean = false
    @Prop({ attribute: 'big-icon' }) bigIcon?: boolean = false
    @Prop({ attribute: 'full-width' }) fullWidth?: boolean = false
    
    /**
     * Component States
     */
    @State() hasSlot: boolean = false

  
    /**
     * @ComponentMethod
     */
    componentDidRender() {
        this.hasSlot = !!this.el.shadowRoot.querySelector('slot').assignedNodes().length
    }

    /**
     * @desc
     * @param isBigIcon 
     */
    getIcon(isBigIcon: boolean = false) {
        const size = isBigIcon ? 'medium' : 14
        const type = isBigIcon ? 'outlined' : 'fill'

        switch (this.status) {
            case StatusProps.info:
                return <bcm-icon type={type} icon="info-circle" size={size} color="blue-6" />
            case StatusProps.error:
                return <bcm-icon type={type} icon="close-circle" size={size} color="red-6" />
            case StatusProps.warning:
                return <bcm-icon type={type} icon="exclamation-circle" size={size} color="warmyellow-6" />
            case StatusProps.success:
                return <bcm-icon type={type} icon="check-circle" size={size} color="green-6" />
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
        const { fullWidth, status, type, icon, bigIcon, hasSlot, _title } = this

        const alertClasses = cs('alert', type, status, {
            'full-width': fullWidth,
            'has-slot': hasSlot
        })

        return (
            <div class={alertClasses}>
                { bigIcon && (<div class="icon-content">{this.getIcon(true)}</div>)}

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

import { Component, Prop, h, Element } from '@stencil/core'
import { StatusProp, StatusProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-message',
    styleUrl: 'message.scss',
    shadow: true
})
export class BcmMessage {
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'}) _title: string
    @Prop() status?: StatusProp = StatusProps.info
    @Prop({ attribute: 'full-width' }) fullWidth?: boolean = false

    /**
     * @desc
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
     * @desc Removes component itself
     */
    dismiss() {
        this.el.remove()
    }

    render() {
        const { fullWidth, status } = this

        const classes = cs('message', status, {
            'full-width': fullWidth,
        })

        return (
            <div class={classes}>
                {this.getIcon()}
                <slot />
            </div>
        )
    }
}

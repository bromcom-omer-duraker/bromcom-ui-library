import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core'
import { TypeProp, TypeProps } from './types';

@Component({
    tag: 'bcm-notification',
    styleUrl: 'notification.scss',
    shadow: true
})
export class BcmNotification {
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'}) _title: string
    @Prop() status?: TypeProp = TypeProps.default
    @Prop() confirmable?: boolean = false

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-confirm' }) confirm: EventEmitter

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getIcon() {
        switch (this.status) {
            case TypeProps.info:
                return <bcm-icon type="outlined" icon="info-circle" size="medium" color="prime-blue-6" />
            case TypeProps.error:
                return <bcm-icon type="outlined" icon="close-circle" size="medium" color="red-6" />
            case TypeProps.warning:
                return <bcm-icon type="outlined" icon="exclamation-circle" size="medium" color="warmyellow-6" />
            case TypeProps.success:
                return <bcm-icon type="outlined" icon="check-circle" size="medium" color="green-6" />
        }
    }

    /**
     * @desc Removes component itself
     */
    dismiss() {
        this.el.remove()
    }

    /**
     * @desc Removes component itself
     */
    handleConfirm() {
        this.confirm.emit()
    }

    render() {
        const { status, _title, confirmable } = this
        return (
            <Host>
                { status !== TypeProps.default && (
                    <div class="icon-content">{this.getIcon()}</div>
                )
                }
                <div class="text-content">
                    <span class="title">
                        {_title}
                        <bcm-icon icon="close" color="grey-10" onClick={() => this.dismiss()} />
                    </span>
                    <p>
                        <slot />
                    </p>
                    {
                        confirmable && (
                            <div class="actions">
                                <bcm-button size="small" onClick={() => this.handleConfirm()}>Confirm</bcm-button>
                            </div>
                        )
                    }
                </div>
            </Host>
        )
    }
}

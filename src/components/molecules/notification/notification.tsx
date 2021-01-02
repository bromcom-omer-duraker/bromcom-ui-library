import { Component, Prop, h, Host } from '@stencil/core'
import { TypeProp, TypeProps } from './types';

@Component({
    tag: 'bcm-notification',
    styleUrl: 'notification.scss',
    shadow: true
})
export class BcmNotification {
    @Prop({ attribute: 'title'}) _title: string
    @Prop() type?: TypeProp = TypeProps.default
    @Prop() confirmable?: boolean = false

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getIcon() {
        switch (this.type) {
            case TypeProps.info:
                return <bcm-icon type="outlined" icon="info-circle" size="medium" color="prime-blue-6" />
            case TypeProps.error:
                return <bcm-icon type="outlined" icon="close-circle" size="medium" color="warmyellow-6" />
            case TypeProps.warning:
                return <bcm-icon type="outlined" icon="exclamation-circle" size="medium" color="red-6" />
            case TypeProps.success:
                return <bcm-icon type="outlined" icon="check-circle" size="medium" color="green-6" />
        }
    }

    render() {
        const { type, _title, confirmable } = this
        return (
            <Host>
                { type !== TypeProps.default && (
                    <div class="icon-content">{this.getIcon()}</div>
                )
                }
                <div class="text-content">
                    <span class="title">
                        {_title}
                        <bcm-icon icon="close" color="grey-10" />
                    </span>
                    <p>
                        <slot />
                    </p>
                    {
                        confirmable && (
                            <div class="actions">
                                <bcm-button size="small">Confirm</bcm-button>
                            </div>
                        )
                    }
                </div>
            </Host>
        )
    }
}

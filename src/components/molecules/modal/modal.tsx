import { Component, Prop, h, Element, Event, EventEmitter, Method } from '@stencil/core'
import { StatusProp, StatusProps, TypeProp, TypeProps, OrientationProp, OrientationProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-modal',
    styleUrl: 'modal.scss',
    shadow: true
})
export class BcmModal {
    /**
     * Component Element
     */
    @Element() el: HTMLElement
    
    /**
     * Component Properties
     */
    @Prop({ attribute: 'title'          }) _title?: string
    @Prop({ attribute: 'type'           }) type: TypeProp = TypeProps.modal
    @Prop({ attribute: 'status'         }) status?: StatusProp = StatusProps.none
    @Prop({ attribute: 'orientation'    }) orientation?: OrientationProp = OrientationProps.landscape
    @Prop({ attribute: 'ok-text'        }) okText?: string = 'OK'
    @Prop({ attribute: 'cancel-text'    }) cancelText?: string = 'Cancel'

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-ok'        }) ok: EventEmitter
    @Event({ eventName: 'bcm-cancel'    }) cancel: EventEmitter

    /**
     * @StencilMethod
     */
    componentWillLoad() {
        if (this.type !== TypeProps.modal && this.status === StatusProps.none)
            this.status = StatusProps.info
    }

    /**
     * @StencilMethod
     */
    componentDidRender() {
    }

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getIcon() {
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
     */
    handleOk() {
        this.ok.emit()
    }

    /**
     * @desc
     */
    handleCancel() {
        this.cancel.emit()
    }

    /**
     * @desc
     * @returns {BcmIcon}
     */
    getFooterActions() {
        return (
            <span class="footer">
                {
                    this.type !== TypeProps.information && (
                        <bcm-button
                            outline
                            onClick={() => this.handleCancel()}
                        >
                            {this.cancelText}
                        </bcm-button>
                    )
                }
                <bcm-button onClick={() => this.handleOk()}>
                    {this.okText}
                </bcm-button>
            </span>
        )
    }

    /**
     * @desc Removes component itself
     */
    dismiss() {
        this.el.remove()
    }

    /**
     * @desc
     */
    @Method()
    async close() {
        this.dismiss()
    }

    render() {
        const { type, status, _title, orientation } = this

        const cardClasses = cs('card', status, [orientation])

        return (
            <div class="modal">
                <div class={cardClasses}>
                    {
                        type === TypeProps.modal && (
                            <header>
                                {_title}
                                <bcm-icon icon="close" color="grey-10" onClick={() => this.dismiss()} />
                            </header>
                        )
                    }
                    <div class="text-content">
                        {
                            type !== TypeProps.modal && (
                                <span class="title">
                                    {this.getIcon()}
                                    {_title}
                                </span>
                            )
                        }
                        <p class={type !== TypeProps.modal ? 'with-status' : ''}>
                            <slot />
                        </p>
                        {
                            type !== TypeProps.modal && this.getFooterActions()
                        }
                    </div>
                    {
                        type === TypeProps.modal && (
                            <footer>
                                {this.getFooterActions()}
                            </footer>
                        )
                    }
                </div>
            </div>
        )
    }
}

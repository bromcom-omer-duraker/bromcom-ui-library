import { Component, Prop, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
    tag: 'bcm-comment-editor',
    styleUrl: 'comment-editor.scss',
    shadow: true
})
export class BcmCommentEditor {
    @Element() el: HTMLElement

    /**
     * Component Properties
     */
    @Prop({ attribute: 'placeholder'    }) placeholder: string
    @Prop({ attribute: 'user-image'     }) userImage: string
    @Prop({ attribute: 'button-text'    }) buttonText: string

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-send-comment' }) sendComment: EventEmitter

    /**
     * @desc
     */
    handleClick() {
        const comment = this.el.shadowRoot.querySelector('bcm-textarea').value

        this.sendComment.emit({
            time: Date.now(),
            comment: comment
        })
    }

    render() {
        const { placeholder, buttonText } = this

        return (
            <div class="comment-editor">
                <bcm-avatar></bcm-avatar>
                <div class="comment">
                    <bcm-textarea 
                        placeholder={placeholder}
                        full-width 
                        rows={4}
                    ></bcm-textarea>
                    <bcm-button onClick={() => this.handleClick()}>
                        {buttonText}
                    </bcm-button>
                </div>
            </div>
        )
    }
}

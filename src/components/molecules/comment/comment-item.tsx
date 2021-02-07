import { Component, Prop, h, State, Listen, Event, EventEmitter } from '@stencil/core';
import { LikeStatusProp, LikeStatusProps } from './types'
import cs from 'classnames'

@Component({
    tag: 'bcm-comment-item',
    styleUrl: 'comment-item.scss',
    shadow: true
})
export class BcmCommentItem {

    /**
     * Component Properties
     */
    @Prop({ attribute: 'name'           }) name: string
    @Prop({ attribute: 'time'           }) time: string
    @Prop({ attribute: 'comment'        }) comment: string
    @Prop({ attribute: 'user-image'     }) userImage: string
    @Prop({ attribute: 'like-status'    }) likeStatus: LikeStatusProp
    @Prop({ attribute: 'liked-count'    }) likedCount: number = 0
    @Prop({ attribute: 'disliked-count' }) dislikedCount: number = 0

    /**
     * Component States
     */
    @State() likeMouseDown: boolean = false
    @State() dislikeMouseDown: boolean = false

    /**
     * Component Events
     */
    @Event({ eventName: 'bcm-comment-liked'     }) commentLiked: EventEmitter
    @Event({ eventName: 'bcm-comment-disliked'  }) commentDisliked: EventEmitter

    /**
     * @desc
     * @param action 
     * @param down 
     */
    handleActionMouseDown(action: string, down: boolean) {
        this[action + 'MouseDown'] = down
    }

    /**
     * @desc
     * @param action 
     */
    handleActionClick(action: LikeStatusProp) {
        if (!this.likeStatus) {
            this[action + 'Count'] = this[action + 'Count'] + 1
            this.likeStatus = action
        }
        else {
            if (this.likeStatus === action) {
                this[action + 'Count'] = this[action + 'Count'] - 1
                this.likeStatus = null
            }
            else {
                const actionReverse = action === LikeStatusProps.liked ? 'disliked' : 'liked' 

                this[action + 'Count'] = this[action + 'Count'] + 1
                this[actionReverse + 'Count'] = this[actionReverse + 'Count'] - 1
                this.likeStatus = action
            }
        }

        action === LikeStatusProps.liked
            ? this.commentLiked.emit()
            : this.commentDisliked.emit()
    }

    /**
     * @desc
     */
    @Listen('mouseup', { target: 'window' })
    handleWindowMouseDown() {
        this.likeMouseDown = false
        this.dislikeMouseDown = false
    }

    render() {
        const { name, time, likeMouseDown, dislikeMouseDown, likeStatus, comment, likedCount, dislikedCount } = this
        const liked = likeStatus === LikeStatusProps.liked
        const disliked = likeStatus === LikeStatusProps.disliked

        return (
            <div class="comment-item">
                <bcm-avatar></bcm-avatar>
                <div class="text-content">
                    <div class="info">
                        <bcm-text scale="size-1" color="grey-7">{name}</bcm-text>
                        <bcm-text scale="size-1" color="grey-6">{time}</bcm-text>
                        <div
                            class={cs('action', {'active': liked})}
                            onClick={_ => this.handleActionClick('liked')}
                        >
                            <bcm-icon
                                icon="like"
                                type={likeMouseDown || liked ? 'fill' : 'outlined'}
                                onMouseDown={() => this.handleActionMouseDown('like', true)}
                            ></bcm-icon>
                            {likedCount}
                        </div>
                        <div
                            class={cs('action', {'active': disliked})}
                            onClick={_ => this.handleActionClick('disliked')}
                        >
                            <bcm-icon
                                icon="dislike"
                                type={dislikeMouseDown || disliked ? 'fill' : 'outlined'}
                                onMouseDown={() => this.handleActionMouseDown('disliked', true)}
                            ></bcm-icon>
                            {dislikedCount}
                        </div>
                    </div>
                    <bcm-text scale="size-2" color="grey-8">
                        {comment}
                    </bcm-text>
                </div>
            </div>
        )
    }
}

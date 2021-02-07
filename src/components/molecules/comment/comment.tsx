import { Component, Prop, h } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-comment',
    styleUrl: 'comment.scss',
    shadow: true
})
export class BcmComment {
    /**
     * Component Properties
     */
    @Prop({ attribute: 'full-width' }) fullWidth: boolean = false

    render() {
        const classes = cs(
            'comment',
            {
                'full-width': this.fullWidth
            }
        )

        return (
            <div class={classes}>
                <slot />
            </div>
        )
    }
}

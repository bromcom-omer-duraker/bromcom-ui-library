import { Component, Prop, h } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-divider',
    styleUrl: 'divider.scss',
    shadow: true
})
export class BcmBadge {

    @Prop() direction: 'vertical' | 'horizontal' = 'horizontal'
    @Prop() width: string = '100'

    render() {

        const classes = cs(
            'divider',
            this.direction
        )

        const styles = {
            width: this.width + '%'
        }

        return (
            <div class={classes} style={this.direction === 'horizontal' && styles} />
        )
    }
}

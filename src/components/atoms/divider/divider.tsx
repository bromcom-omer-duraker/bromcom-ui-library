import { Component, Prop, h } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-divider',
    styleUrl: 'divider.scss',
    shadow: true
})
export class BcmBadge {

    @Prop() direction: 'vertical' | 'horizontal' = 'horizontal'
    @Prop() width: string = this.direction === 'horizontal' ? '100' : '1'

    render() {

        const classes = cs(
            'divider',
            this.direction
        )

        const styles = {
            width: this.width + (this.direction === 'horizontal' ? '%' : 'px')
        }

        return (
            <div class={classes} style={styles} />
        )
    }
}

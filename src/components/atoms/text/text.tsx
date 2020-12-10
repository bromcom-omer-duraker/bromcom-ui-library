import { Component,  h, Prop } from '@stencil/core';    
import cs from 'classnames'
import { ColorPalette } from '../../../global/variables/colors';
import { extractColor } from '../../../utils/utils';

@Component({
    tag: 'bcm-text',
    styleUrl: 'text.scss',
    scoped: true,
})
export class BcmText {

    @Prop() scale: string = 'size-4'
    @Prop() weight: 'regular' | 'semibold' = 'regular'
    @Prop() color: string = 'grey-10'

    render() {
        const classes = cs(
            `weight-${this.weight}`,
            this.scale
        )

        return (
            <p class={classes} style={{color: extractColor(ColorPalette, this.color)}}>
                <slot />
            </p>
        )
    }
}

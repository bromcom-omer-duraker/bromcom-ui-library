import { Component,  h } from '@stencil/core';    

@Component({
    tag: 'bcm-input',
    styleUrl: 'input.scss',
})
export class BcmInput {
    render() {
        return (
            <input type="text" />
        )
    }
}

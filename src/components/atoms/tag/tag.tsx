import { Component, Prop, Listen, h, Host, Watch, EventEmitter, Event } from '@stencil/core';
import cs from 'classnames'

@Component({
    tag: 'bcm-tag',
    styleUrl: 'tag.scss',
    scoped: true
})
export class BcmTag {

    @Prop() type: string = 'basic'
    @Prop() checked: boolean = false

    @Listen('click', { capture: true })
    handleClick() {
        if (this.type === 'checkable') {
            this.checked = !this.checked;
        }
    }

    @Event() checkedChange: EventEmitter<object>

    @Watch('checked')
    onCheckedChange(newValue: boolean, oldValue: boolean) {
        this.checkedChange.emit({ newValue, oldValue })
    }

    render() {

        const { type } = this

        const classes = cs(
            'tag',
            'size-1',
            type
        )

        if (type === 'closeable' || type === 'add') {
            return (
                <button class={classes}>
                    {
                        type === "add" ? (
                            <span class="left">
                                <bcm-icon icon="plus" type="outlined" color="grey-8" size="14"></bcm-icon>
                            </span>
                        ) : null
                    }
                    <slot />
                    {
                        type === "closeable" ? (
                            <span class="right">
                                <bcm-icon icon="close" type="outlined" color="grey-10" size="14"></bcm-icon>
                            </span>
                        ) : null
                    }
                </button>
            )
        }

        else if (type === 'checkable') {
            return (
                <Host>
                    <input type="checkbox" checked={this.checked} />
                    <label class={classes}>
                        <slot />
                    </label>
                </Host>
            )
        }

        return (
            <span class={classes}>
                <slot />
            </span>
        )
    }
}

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

    closeIcon() {
        return (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46473 2.03907L9.96191 2.53625C10.0061 2.58045 10.0061 2.62464 9.96191 2.66884L2.66987 9.96088C2.62568 10.0051 2.58149 10.0051 2.53729 9.96088L2.04011 9.46369C1.99591 9.4195 1.99591 9.3753 2.04011 9.33111L9.33215 2.03907C9.37634 1.99488 9.42053 1.99488 9.46473 2.03907Z" fill="black" />
                <path d="M2.66785 2.03907L9.95989 9.33111C10.0041 9.3753 10.0041 9.4195 9.95989 9.46369L9.46271 9.96088C9.41851 10.0051 9.37432 10.0051 9.33013 9.96088L2.03809 2.66884C1.99389 2.62464 1.99389 2.58045 2.03809 2.53625L2.53527 2.03907C2.57947 1.99488 2.62366 1.99488 2.66785 2.03907Z" fill="black" />
            </svg>
        )
    }

    plusIcon() {
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.58984 2.07812H7.41016C7.48307 2.07812 7.51953 2.11458 7.51953 2.1875V11.8125C7.51953 11.8854 7.48307 11.9219 7.41016 11.9219H6.58984C6.51693 11.9219 6.48047 11.8854 6.48047 11.8125V2.1875C6.48047 2.11458 6.51693 2.07812 6.58984 2.07812Z" fill="#595959" />
                <path d="M2.40625 6.48047H11.5938C11.6667 6.48047 11.7031 6.51693 11.7031 6.58984V7.41016C11.7031 7.48307 11.6667 7.51953 11.5938 7.51953H2.40625C2.33333 7.51953 2.29688 7.48307 2.29688 7.41016V6.58984C2.29688 6.51693 2.33333 6.48047 2.40625 6.48047Z" fill="#595959" />
            </svg>
        )
    }

    @Listen('click', { capture: true })
    handleClick() {
        if (this.type === 'checkable') {
            this.checked = !this.checked;
        }
    }

    @Event() checkedChange: EventEmitter<object>

    @Watch('checked')
    watchHandler(newValue: boolean, oldValue: boolean) {
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
                        type === "add" ? <span class="left">{this.plusIcon()}</span> : null
                    }
                    <slot />
                    {
                        type === "closeable" ? <span class="right">{this.closeIcon()}</span> : null
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

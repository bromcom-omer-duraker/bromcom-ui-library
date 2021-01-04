import { Component, h, Host, Prop, Watch, Event, EventEmitter } from '@stencil/core'
import cs from 'classnames'

let id = 0

@Component({
    tag: 'bcm-collapse',
    styleUrl: 'collapse.scss',
    shadow: true
})
export class BcmCollapse {

    collapseId = `collapse-${++id}`

    @Prop() borderless: boolean = false
    @Prop({ mutable: true, reflect: true }) open: boolean = false

    @Event({ eventName: 'bcm-open'}) bcmOpen: EventEmitter

    @Watch('open')
    handleChange(newValue: boolean) {
        newValue && (this.bcmOpen.emit(this.collapseId))
    }

    handleClick() {
        this.open = !this.open
    }

    render() {

        const classes = cs(
            'collapse',
            {
                'borderless': this.borderless,
                'open': this.open
            }
        )

        return (
            <Host id={this.collapseId}>
                <details class={classes} open={this.open}>
                    <summary class="collapse-header size-2" onClick={() => this.handleClick()}>
                        <bcm-icon class="collapse-icon" size={16} icon={this.open ? 'caret-down' : 'caret-right'} type="fill" color="grey-10"></bcm-icon>
                        <slot name="title" />
                    </summary>

                    <div class="collapse-body">
                        <slot name="body" />
                    </div>  

                </details>
            </Host>
        )
    }
}
import { Component, h, Listen, Prop, State, Element } from '@stencil/core'

interface DropdownType {
    href?: string,
    label?: string,
    icon?: string,
    target?: string
}

export interface ItemType {
    label?: string,
    href?: string,
    icon?: string,
    target: string,
    dropdown?: Array<DropdownType>
}

@Component({
    tag: 'bcm-breadcrumb',
    styleUrl: 'breadcrumb.scss',
    shadow: true
})
export class BcmBreadcrumb {

    @Element() host: HTMLElement

    @Prop() items: Array<ItemType>

    @State() isOpen: boolean

    @Listen('click', { target: 'window', capture: true })
    handleClickOutside(e: MouseEvent) {

        if (!this.host.contains(e.target as HTMLElement)) {
            if (this.isOpen) this.isOpen = false
        }
    }

    handleOpen() {
        this.isOpen = !this.isOpen
    }

    decideRender(item: ItemType, isLast: boolean) {
        let iconExist: boolean = false
        let labelExist: boolean = false
        let hrefExist: boolean = false
        let dropdownExist: boolean = false

        Object.keys(item).map(prop => {
            prop === 'icon' && (iconExist = true)
            prop === 'label' && (labelExist = true)
            prop === 'href' && (hrefExist = true)
            prop === 'dropdown' && (dropdownExist = true)
        })

        if (dropdownExist) {
            return (
                <details class="dropdown" open={this.isOpen}>
                    <summary onClick={() => this.handleOpen()} class={this.isOpen && 'open'}>
                        <span>
                            {iconExist ? <bcm-icon icon={item.icon} size={16}></bcm-icon> : null}
                            {labelExist ? item.label : null}
                        </span>
                        <bcm-icon icon="down" size={12}></bcm-icon>
                    </summary>
                    <div class="dropdown-menu">
                        {
                            item.dropdown.map(link => (
                                <span class="size-2 dropdown-item">
                                    <bcm-link 
                                        target={link.target}
                                        href={link.href} 
                                        icon={link.icon ? link.icon : null}>{link.label ? link.label : null}
                                    </bcm-link>
                                </span>
                            ))
                        }
                    </div>
                </details>
            )
        }

        else if (!hrefExist || isLast) {
            return (
                <span class="non-link-item">
                    {iconExist ? <bcm-icon icon={item.icon} size={16}></bcm-icon> : null}
                    {labelExist ? item.label : null}
                </span>
            )
        }

        return (
            <bcm-link
                target={item.target}
                href={item.href}
                icon={iconExist ? item.icon : null}>{labelExist ? item.label : null}
            </bcm-link>
        )
    }

    render() {

        return (
            <ul class="breadcrumb">
                {
                    this.items.map((item, index) => (
                        <li class="breadcrumb-item">
                            {this.decideRender(item, index === this.items.length - 1)}
                        </li>
                    ))
                }
            </ul>
        )
    }
}
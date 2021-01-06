import { Component, h, Prop } from '@stencil/core'

export interface ItemType {
    label: string,
    href?: string,
    icon?: string
}

@Component({
    tag: 'bcm-breadcrumb',
    styleUrl: 'breadcrumb.scss',
    shadow: true
})
export class BcmBreadcrumb {

    @Prop() items: Array<ItemType>

    decideRender(item: ItemType, isLast: boolean) {
        let iconExist: boolean = false
        let labelExist: boolean = false
        let hrefExist: boolean = false

        Object.keys(item).map(prop => {
            prop === 'icon' && (iconExist = true)
            prop === 'label' && (labelExist = true)
            prop === 'href' && (hrefExist = true)
        })
        
        if (!hrefExist || isLast) {
            return (
                <span class="non-link-item">
                    {iconExist ? <bcm-icon icon={item.icon} size={16}></bcm-icon> : null}
                    {labelExist ? item.label : null}
                </span>
            )
        }

        return (
            <bcm-link href={item.href} icon={iconExist ? item.icon : null}>{labelExist ? item.label : null}</bcm-link>
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
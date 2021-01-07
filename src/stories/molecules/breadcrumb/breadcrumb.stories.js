import { h } from 'jsx-dom'

const items = [
    {
        icon: 'home',
        href: 'https://google.com',
    },
    {
        label: 'Breadcrumb Link 2',
        href: 'https://google.com',
        icon: 'home'
    },
    {
        label: 'Breadcrumb Link 3',
        href: 'https://google.com',
    },
    {
        label: 'Breadcrumb Link 4',
        dropdown: [
            {
                label: 'Item 1',
                href: 'https://google.com',
                target: '_blank'
            },
            {
                label: 'Item 2',
                href: 'https://google.com',
            },
        ]
    },
    {
        label: 'Breadcrumb',
        href: 'https://google.com',
    }
]

export default {
    title: 'Components/Molecules/Breadcrumb',
    component: 'bcm-breadcrumb',
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of objects to set breadcrumb items. Each object can have different properties.',
            table: {
                category: 'Properties',
                type: { summary: 'Array<object>' },
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.'
            },
            source: {
                code: `<bcm-breadcrumb></bcm-breadcrumb>`
            }
        }
    }
}

export const Default = (args) => (
    <bcm-breadcrumb {...args} ></bcm-breadcrumb>
)
Default.decorators = [
    (story) => {
        setTimeout(() => {
            Array.from(document.querySelectorAll('bcm-breadcrumb')).map(el => {
                el.items = items
            })
        });
        return story()
    }
]
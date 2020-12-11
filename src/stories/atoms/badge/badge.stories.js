import { h } from 'jsx-dom'

export default {
    title: 'Components/Atoms/Badge',
    component: 'bcm-badge',
    argTypes: {
        type: {
            description: 'Type of the badge.',
            defaultValue: 'basic',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'basic' },
                type: { summary: 'string' }
            }
        },
        status: {
            control: { type: 'select', options: ['default', 'success', 'error', 'processing', 'warning']},
            description: 'Sets badge color..',
            defaultValue: 'default',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'default' },
                type: { summary: 'string' }
            }
        },

    },
    parameters: {
        docs: {
            description: {
                component: 'Small numerical value or status descriptor.'
            },
            source: {
                code: `<bcm-badge></bcm-badge>`
            }
        }
    }
}

export const Basic = (args) => <bcm-badge {...args} type="basic"></bcm-badge>
Basic.argTypes = {
    value: {
        control: 'number',
        description: 'Value of the badge.',
        defaultValue: 1,
        table: {
            category: 'Properties',
            type: { summary: 'number' }
        }
    }
}


export const Info = ({text, ...args}) => <bcm-badge {...args} type="info"> {text} </bcm-badge>
Info.argTypes = {
    text: {
        control: 'text',
        description: 'Content of the badge.',
        defaultValue: 'Default',
        table: {
            category: 'Slots',
        }
    }
}

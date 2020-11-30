import { h } from 'jsx-dom'

export default {
    title: 'Components/Atoms/Badge',
    component: 'bcm-badge',
    argTypes: {
        text: {
            control: 'text',
            description: 'Content of the badge.',
            table: {
                category: 'Slots',
            }
        },
        type: {
            control: { type: 'select', options: ['basic', 'info']},
            description: 'Type of the badge..',
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
            defaultValue: 'error',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'default' },
                type: { summary: 'string' }
            }
        },
        value: {
            control: 'number',
            description: 'Value of the badge.',
            defaultValue: 1,
            table: {
                category: 'Properties',
                type: { summary: 'number' }
            }
        }
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

const Template = ({text, ...args}) => <bcm-badge {...args}> {text} </bcm-badge>

export const Default = Template.bind({})

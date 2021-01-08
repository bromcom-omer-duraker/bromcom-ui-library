import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Switch',
    component: 'bcm-switch',
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Default checked state of the switch.',
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium'] },
            description: 'Size of the switch.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                defaultValue: { summary: '"medium"' },
                type: { summary: 'string' }
            }
        },
        'active-icon': {
            control: 'text',
            description: 'Sets active icon name.',
            defaultValue: 'check',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'inactive-icon': {
            control: 'text',
            description: 'Sets inactive icon name.',
            defaultValue: 'close',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'active-text': {
            control: 'text',
            description: 'Sets active text content.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'inactive-text': {
            control: 'text',
            description: 'Sets inactive text content.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Set to true to disable the switch.',
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
        pending: {
            control: 'boolean',
            description: 'Sets pending state.',
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Switching Selector'
            },
            source: {
                code: `<bcm-switch></bcm-switch>`
            }
        }
    }
}

export const Default = (args) => (
    <bcm-switch {...args}></bcm-switch>
)

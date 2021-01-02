import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Select',
    component: 'bcm-select',
    argTypes: {
        value: {
            control: 'text',
            description: 'Selected value.',
            table: {
                category: 'Properties',
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: 'Size of the select.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'medium' },
                type: { summary: 'string' }
            }
        },
        options: {
            control: 'text',
            description: 'Avaible option list.',
            table: {
                category: 'Properties',
                type: { summary: 'Array<object>' }
            }
        },
        scrollable: {
            control: { type: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
            description: 'Sets scroll type.',
            defaultValue:"vertical",
            table: {
                category: 'Properties',
                defaultValue: { summary: 'vertical'},
                type: { summary: 'boolean' },
            }
        },
        clearable: {
            control: 'boolean',
            description: 'Set to true to add a clear button.',
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
            }
        },
        label: {
            control: 'text',
            description: "The select's label.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        caption: {
            control: 'text',
            description: "The select's caption.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        'caption-type': {
            control: { type: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] },
            description: "The caption's type.",
            defaultValue: 'default',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'default' }
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Set to true to disable the select.',
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
                component: ''
            },
            source: {
                code: `<bcm-tag>Tag</bcm-tag>`
            }
        }
    }
}


export const Default = (args) => (
    <bcm-select {...args}>
        <bcm-select-option value="first" disabled>Menu item first</bcm-select-option>
        <bcm-select-option value="second">Menu item second</bcm-select-option>
        <bcm-select-option value="third">Menu item third</bcm-select-option>
        <bcm-select-option value="fourth">Menu item fourth</bcm-select-option>
    </bcm-select>
)

export const WithGroup = (args) => (
    <bcm-select {...args}>
        <bcm-select-group heading="Group title">
            <bcm-select-option value="first" disabled>Menu item first</bcm-select-option>
            <bcm-select-option value="second">Menu item second</bcm-select-option>
        </bcm-select-group>
        <bcm-select-group heading="Group title">
            <bcm-select-option value="third">Menu item third</bcm-select-option>
            <bcm-select-option value="fourth">Menu item fourth</bcm-select-option>
        </bcm-select-group>
    </bcm-select>
)
import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/SplitButton',
    component: 'bcm-split-button',
    argTypes: {
        text: {
            control: 'text',
            description: 'Title of the split button.',
            defaultValue: 'Actions',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: 'Adjust size.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"medium"' },
            }
        },
        outline: {
            control: 'boolean',
            description: "Button's outlined state.",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        disabled: {
            control: 'boolean',
            description: "Button's disabled state.",
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A divider line separates different content..'
            },
            source: {
                code: `<bcm-card></bcm-card>`
            }
        }
    }
}

export const Default = (args) => (
    <bcm-split-button {...args}>
        <bcm-split-item>Add</bcm-split-item>
        <bcm-split-item>Edit</bcm-split-item>
        <bcm-split-item>Delete</bcm-split-item>
    </bcm-split-button>
)

export const WithIcon = (args) => (
    <bcm-split-button {...args}>
        <bcm-split-item icon="plus-circle">Add</bcm-split-item>
        <bcm-split-item icon="edit">Edit</bcm-split-item>
        <bcm-split-item icon="delete">Delete</bcm-split-item>
    </bcm-split-button>
)
WithIcon.args = {
    icon: 'branches'
}
WithIcon.argTypes = {
    icon: {
        control: 'text',
        description: "Button's outlined state.",
        table: {
            category: 'Properties',
            type: { summary: 'string' },
        }
    },
    'icon-position': {
        control: { type: 'inline-radio', options: ['prefix', 'suffix'] },
        description: 'Adjust size.',
        defaultValue: 'prefix',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"prefix"' },
        }
    }
}
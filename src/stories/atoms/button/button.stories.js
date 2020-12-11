import { h } from 'jsx-dom'
import notes from './button.md'

export default {
    title: 'Components/Atoms/Button',
    component: 'bcm-button',
    argTypes: {
        label: {
            control: 'text',
            description: 'The content of the button.',
            table: {
                category: 'Slots'
            }
        },
        kind: {
            control: { type: 'select', options: ['solid', 'ghost'] },
            description: 'Sets button UI mode to selected kind.',
            defaultValue: 'solid',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"solid"' },
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
                component: 'Wraps a `<button>` with some modes and events.'
            },
            source: {
                code: `<bcm-button>Press Me</bcm-button>`
            }
        },
        notes
    }
}

const Template = ({ label, ...args }) => <bcm-button {...args}> {label} </bcm-button>

export const Default = Template.bind({})
Default.args = {
    label: 'Press Me',
}

export const WithIcon = ({label, ...args}) => (
    <bcm-button {...args}> {label} </bcm-button>
)
WithIcon.args = {
    label: 'Press Me',
    icon: 'cloud-upload'
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

export const IconOnly = (args) => (
    <bcm-button {...args}></bcm-button>
)
IconOnly.args = {
    icon: 'cloud-upload'
}
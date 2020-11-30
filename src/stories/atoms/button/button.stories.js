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
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"medium"' },
            }
        },
        icon: {
            control: 'text',
            description: 'If set with existing icon name, button will contain icon.',
            defaultValue: 'cloud',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'cloud' },
            }
        },
        'icon-position': {
            control: { type: 'inline-radio', options: ['left', 'right'] },
            description: "Choose icon's position.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"left"' },
            }
        },
        'icon-only': {
            control: 'boolean',
            description: 'If set, button will contain only icon.',
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
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
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        onClick: {
            name: 'onclick',
            description: 'Fires whenever the button is clicked.',
            table: {
                category: 'Events',
                type: { summary: 'function' },
            },
            action: 'clicked'
        },
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

const Template = ({ label, icon, ...args }) => <bcm-button {...args} icon={icon ? 'cloud' : false} > {label} </bcm-button>

export const Default = Template.bind({})
Default.args = {
    label: 'Press Me',
    size: 'medium',
    'icon-position': 'left',
    'icon-only': false
}

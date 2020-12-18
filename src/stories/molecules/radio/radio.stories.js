import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Radio',
    component: 'bcm-radio',
    argTypes: {
        'default-value': {
            control: 'text',
            description: 'Sets button UI mode to selected kind.',
            defaultValue: "opt2",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Wraps a `<button>` with some modes and events.'
            },
            source: {
                // code: `<bcm-button>Press Me</bcm-button>`
            }
        },
    }
}

export const Default = (args) => (
    <bcm-radio-group {...args}>
        <bcm-radio value="opt1"> Option 1 </bcm-radio>
        <bcm-radio value="opt2"> Options 2 </bcm-radio>
        <bcm-radio value="opt3"> Options 3 </bcm-radio>
    </bcm-radio-group>
)

Default.argTypes = {
    direction: {
        control: { type: 'select', options: ['vertical', 'horizontal'] },
        description: 'Adjust size.',
        defaultValue: 'horizontal',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"horizontal"' },
        }
    }
}

export const RadioButton = (args) => (
    <bcm-radio-group {...args}>
        <bcm-radio value="opt1"> Option 1 </bcm-radio>
        <bcm-radio value="opt2"> Options 2 </bcm-radio>
        <bcm-radio value="opt3"> Options 3 </bcm-radio>
    </bcm-radio-group>
)
RadioButton.args = {
    'option-type': 'button',
    'button-style': 'solid',
    'size': 'medium'
}

RadioButton.argTypes = {
    'option-type': {
        control: { type: 'select', options: ['default', 'button'] },
        description: 'Adjust size.',
        defaultValue: 'default',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"default"' },
        }
    },
    'button-style': {
        control: { type: 'select', options: ['solid', 'outline'] },
        description: 'Adjust size.',
        defaultValue: 'solid',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"solid"' },
        }
    },
    'size': {
        control: { type: 'select', options: ['small', 'medium', 'large'] },
        description: 'Adjust size.',
        defaultValue: 'medium',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"medium"' },
        }
    }
}
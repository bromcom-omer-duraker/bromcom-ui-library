import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Radio',
    component: 'bcm-radio',
    argTypes: {
        'default-value': {
            control: 'text',
            description: "Radio group's default value.",
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
                component: 'Radio or button group.'
            },
            source: {
                code: `<bcm-radio>Option 1</bcm-radio>`
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
        description: 'Direction of the radio group.',
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
        description: "Sets visual type of the radio.",
        defaultValue: 'default',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"default"' },
        }
    },
    'button-style': {
        control: { type: 'select', options: ['solid', 'outline'] },
        description: 'Sets button style, if option-type is button.',
        defaultValue: 'solid',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"solid"' },
        }
    },
    'size': {
        control: { type: 'select', options: ['small', 'medium', 'large'] },
        description: 'Sets size of the button, if option-type is button.',
        defaultValue: 'medium',
        table: {
            category: 'Properties',
            type: { summary: 'string' },
            defaultValue: { summary: '"medium"' },
        }
    }
}
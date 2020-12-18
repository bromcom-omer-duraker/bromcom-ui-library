import { h } from 'jsx-dom'
import notes from './checkbox.md'

export default {
    title: 'Components/Molecules/Checkbox',
    component: 'bcm-checkbox',
    argTypes: {
        name: {
            control: 'text',
            description: "Checkbox name/id",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        checked: {
            control: 'boolean',
            description: "Check initially",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        disabled: {
            control: 'boolean',
            description: "Disable initially",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        'bcm-change': {
            description: "Emitted when the input checked or unchecked.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        check: {
            description: "Check or uncheck the input",
            table: {
                category: 'Methods',
                type: { summary: 'true/false' },
            }
        },
        notes
    }
}
const Template = (args) => <bcm-checkbox {...args}>Checkbox 1</bcm-checkbox>

export const Default = Template.bind({})
Default.args = {
    name: 'checkbox-1',
    checked: false,
    disabled: false
}

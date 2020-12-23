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

        /**
         * Group
         */
        items: {
            control: { type: 'text' },
            description: 'Checkbox items can also be added as JSON objects within the group.',
            table: {
                category: 'Group Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        direction: {
            control: { type: 'select', options: ['horizontal', 'vertical'] },
            description: 'Allows the elements in the group to be arranged horizontally or vertically',
            table: {
                category: 'Group Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'horizontal' },
            }
        }, 
        indeterminate: {
            description: "Add's additional indetermination control",
            table: {
                category: 'Group Properties',
                type: { summary: 'true/false' },
            }
        },
        'bcm-change': {
            description: "Emitted when any input in group checked or unchecked.",
            table: {
                category: 'Group Events',
                type: { summary: 'CustomEvent' },
            }
        },
        checked: {
            description: "Get state of target checkbox. If the checkbox name is not passed, it returns the selected checkboxes in an array",
            table: {
                category: 'Group Methods',
                type: { summary: 'checkbox name | \'\'' },
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

export const WithGroup = (args) => (
    <bcm-checkbox-group name="additional" {...args}>
          <bcm-checkbox name="checkbox1" checked>
            Checkbox 1
          </bcm-checkbox>
          <bcm-checkbox name="checkbox2">
            Checkbox 2
          </bcm-checkbox>
          <bcm-checkbox name="checkbox3">
            Checkbox 3
          </bcm-checkbox>
        </bcm-checkbox-group>
)
WithGroup.args = {
    indeterminate: false
}
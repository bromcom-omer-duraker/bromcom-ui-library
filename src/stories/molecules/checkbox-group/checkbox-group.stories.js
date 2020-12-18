import { h } from 'jsx-dom'
import notes from './checkbox-group.md'

export default {
    title: 'Components/Molecules/CheckboxGroup',
    component: 'bcm-checkbox-group',
    argTypes: {
        direction: {
            control: { type: 'select', options: ['horizontal', 'vertical'] },
            description: 'Allows the elements in the group to be arranged horizontally or vertically',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'horizontal' },
            }
        }, 
        items: {
            control: { type: 'text' },
            description: 'Checkbox items can also be added as JSON objects within the group.',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        indeterminate: {
            control: 'boolean',
            description: "Add's additional indetermination control",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        'bcm-change': {
            description: "Emitted when any input in group checked or unchecked.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        checked: {
            description: "Get state of target checkbox. If the checkbox name is not passed, it returns the selected checkboxes in an array",
            table: {
                category: 'Methods',
                type: { summary: 'checkbox name | \'\'' },
            }
        },
        notes
    }
}

const Template = ({ ...args }) => <bcm-checkbox-group {...args}>
    <bcm-checkbox name="checkbox-2">Checkbox 1</bcm-checkbox>
    <bcm-checkbox name="checkbox-3" checked>Checkbox 2</bcm-checkbox>
    <bcm-checkbox name="checkbox-4">Checkbox 3</bcm-checkbox>
</bcm-checkbox-group>

export const Default = Template.bind({})
Default.args = {
    direction: 'horizontal',
    items: '[{"name": "checkbox-1", "label": "Checkbox 1"}]',
    indeterminate: false
}

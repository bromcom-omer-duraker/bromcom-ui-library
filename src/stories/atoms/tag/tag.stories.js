import { h } from 'jsx-dom'
import { action, actions } from '@storybook/addon-actions'

export default {
    title: 'Components/Atoms/Tag',
    component: 'bcm-tag',
    argTypes: {
        text: {
            control: 'text',
            description: 'Content of the tag.',
            defaultValue: 'Tag',
            table: {
                category: 'Slots',
            }
        },
        type: {
            control: { type: 'select', options: ['basic', 'closeable', 'add', 'checkable'] },
            description: 'Type of the tag.',
            defaultValue: 'basic',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'basic' },
                type: { summary: 'string' }
            }
        },
        checked: {
            control: 'boolean',
            description: 'Sets checked state for checkable tags.',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        checkedChange: {
            name: 'checkedChange',
            description: 'Fires whenever checked state changed.',
            table: {
                category: 'Events',
                type: { summary: 'event' },
            }
        }
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
window.addEventListener('checkedChange', action('checkedChange'));
const Template = ({ text, ...args }) => <bcm-tag {...args}> {text} </bcm-tag>

export const Default = Template.bind({})

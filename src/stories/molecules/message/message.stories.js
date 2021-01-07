import { h } from 'jsx-dom'
import notes from './message.md'

export default {
    title: 'Components/Molecules/Message',
    component: 'bcm-message',
    argTypes: {
        status: {
            control: { type: 'select', options: ['info', 'error', 'warning', 'success'] },
            description: 'Changes message appearance',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        'full-width': {
            control: 'boolean',
            description: "Makes alert full width",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        notes
    }
}

const Template = (args) => {
    return (
        <bcm-message {...args} >
            This is success message, lorem ipsum dolor sit amet, consec adipiscing elit
        </bcm-message>
    )
}

export const Default = Template.bind({})
Default.args = {}
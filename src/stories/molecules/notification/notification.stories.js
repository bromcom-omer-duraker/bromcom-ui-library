import { h } from 'jsx-dom'
import notes from './notification.md'

export default {
    title: 'Components/Molecules/Notification',
    component: 'bcm-checkbox',
    argTypes: {
        status: {
            control: { type: 'select', options: ['none', 'info', 'error', 'warning', 'success'] },
            description: 'Changes notification appearance',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        confirmable: {
            control: 'boolean',
            description: "Adds confirm button",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        'bcm-confirm': {
            description: "Emitted when the confirm button clicked.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        notes
    }
}

const Template = (args) => (
    <bcm-notification {...args} title="Notification Title">
        Proactively incubate innovative processes for high-payoff architectures.
        Globally benchmark flexible.
    </bcm-notification>
)

export const Default = Template.bind({})
Default.args = {}

export const WithStatus = (args) => (
    <bcm-notification {...args} title="Notification Title">
        Proactively incubate innovative processes for high-payoff architectures.
        Globally benchmark flexible.
    </bcm-notification>
)
WithStatus.args = {
    status: 'success'
}
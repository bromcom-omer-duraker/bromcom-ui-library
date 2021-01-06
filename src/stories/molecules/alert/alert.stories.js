import { h } from 'jsx-dom'
import notes from './alert.md'

export default {
    title: 'Components/Molecules/Alert',
    component: 'bcm-checkbox',
    argTypes: {
        status: {
            control: { type: 'select', options: ['info', 'error', 'warning', 'success'] },
            description: 'Changes alert appearance',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        type: {
            control: { type: 'select', options: ['basic', 'banner'] },
            description: 'Display alert with border or borderless',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        title: {
            control: 'text',
            description: "Alert title",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'Basic Alert' },
            }
        },
        dissmisable: {
            control: 'text',
            description: "Adds dissmiss button or dissmiss text button",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'Close now' },
            }
        },
        icon: {
            control: 'boolean',
            description: "Shows icon for current state",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            }
        },
        'big-icon': {
            control: 'boolean',
            description: "Shows big icon for current state",
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
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
        <bcm-alert {...args} ></bcm-alert>
    )
}

export const Default = Template.bind({})
Default.args = {
    title: 'Basic Alert',
    dissmisable: ''
}

export const WithContent = (args) => (
    <bcm-alert {...args} >
        Monotonectally develop visionary benefits vis-a-vis granular data. Completely transform bleeding-edge.
    </bcm-alert>
)
WithContent.args = {
    title: 'Basic Alert',
}
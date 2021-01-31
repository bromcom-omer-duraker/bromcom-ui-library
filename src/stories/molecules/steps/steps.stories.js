import { h } from 'jsx-dom'
import notes from './steps.md'

export default {
    title: 'Components/Molecules/Steps',
    component: 'bcm-steps',
    argTypes: {
        direction: {
            control: { type: 'inline-radio', options: ['horizontal', 'vertical'] },
            description: 'Slider display direction',
            defaultValue: 'horizontal',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'horizontal' },
            }
        },
        icon: {
            control: 'text',
            description: "Start value",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            }
        },
        sequential: {
            control: 'boolean',
            description: 'Every steps need to be validated when navigating',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        notes
    }
}

const Template = (args) => (
    <bcm-steps {...args}>
        <bcm-step title="Step 1" description="This is the description">
            <bcm-text class="group-title" scale="size-3">
                Step 1 content
            </bcm-text>
        </bcm-step>
        <bcm-step title="Step 2" description="This is the description">
            <bcm-text class="group-title" scale="size-3">
                Step 2 content
            </bcm-text>
        </bcm-step>
        <bcm-step title="Step 3" description="This is the description">
            <bcm-text class="group-title" scale="size-3">
                Step 3 content
            </bcm-text>
        </bcm-step>
    </bcm-steps>
)

export const Default = Template.bind({})
Default.args = {
}


                
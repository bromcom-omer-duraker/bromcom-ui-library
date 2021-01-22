import { h } from 'jsx-dom'
import notes from './slider.md'

export default {
    title: 'Components/Molecules/Slider',
    component: 'bcm-slider',
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
        range: {
            control: 'boolean',
            description: 'Select values between min and max',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        min: {
            control: 'text',
            description: "Start value",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            }
        },
        max: {
            control: 'text',
            description: "End value",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 10 },
            }
        },
        step: {
            control: 'text',
            description: "Increment step while creating elements",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            }
        },
        value: {
            control: 'text',
            description: "Initial value",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: '1 | [2, 5]' },
            }
        },
        'label-prefix': {
            control: 'text',
            description: "Includes prefix text for slider item label",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        'label-suffix': {
            control: 'text',
            description: "Includes suffix text for slider item label",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            }
        },
        notes
    }
}

const Template = (args) => (
    <div style="width: 500px; padding: 30px 0 0 30px;">
        <bcm-slider {...args}></bcm-slider>
    </div>
)

export const Default = Template.bind({})
Default.args = {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
    value: '3'
}

export const WithRange = (args) => (
    <div style="width: 500px; padding: 30px 0 0 30px;">
        <bcm-slider {...args}></bcm-slider>
    </div>
)
WithRange.args = {
    range: true,
    min: 1,
    max: 10,
    step: 1,
    value: '[2, 5]'
}
import { h } from 'jsx-dom'
import notes from './empty.md'

export default {
    title: 'Components/Molecules/Empty',
    component: 'bcm-notification',
    argTypes: {
        image: {
            control: { type: 'select', options: ['default', 'simple'] },
            description: 'Image type',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'default' },
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'big'] },
            description: 'Image type',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' },
            }
        },
        text: {
            control: 'text',
            description: "Additional text",
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
    <bcm-empty {...args}></bcm-empty>
)

export const Default = Template.bind({})
Default.args = {
    text: 'No Data',
    image: 'simple'
}

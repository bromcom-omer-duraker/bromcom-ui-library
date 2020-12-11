import { h } from 'jsx-dom'
import notes from './icon.md'

export default {
    title: 'Components/Atoms/Icon',
    component: 'bcm-icon',
    argTypes: {
        icon: {
            control: { type: 'text' },
            description: 'Icon name',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'link' },
            }
        }, 
        type: {
            control: { type: 'select', options: ['fill', 'outlined', 'multi-color'] },
            description: 'Sets icon type',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'outlined' },
            }
        },
        color: {
            control: { type: 'text' },
            description: 'Sets icon color, you must use colors which defined in color palette',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'prime-blue-6' },
            }
        },
        size: {
            control: { type: 'text' },
            description: 'Sets icon size',
            table: {
                category: 'Properties',
                type: { summary: 'xsmall|small|medium|large|number' },
                defaultValue: { summary: 'medium' },
            }
        },
        notes
    }
}

const Template = ({ ...args }) => <bcm-icon {...args} ></bcm-icon>

export const Default = Template.bind({})
Default.args = {
    color: 'prime-blue-6',
    type: 'outlined',
    size: 'medium',
    icon: 'link'
}

import { h } from 'jsx-dom'

export default {
    title: 'Components/Atoms/Text',
    component: 'bcm-text',
    argTypes: {
        label: {
            control: 'text',
            defaultValue: 'This is a Bromcom UI text component.',
            description: 'Text content.',
            table: {
                category: 'Slots'
            }
        },
        scale: {
            control: { type: 'select', options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7', 'size-8', 'size-9',] },
            description: 'Sets text size and line height.',
            defaultValue: 'size-4',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"size-4"' },
            }
        },
        weight: {
            control: { type: 'select', options: ['regular', 'semibold'] },
            description: 'Sets font weight.',
            defaultValue: 'regular',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"regular"' },
            }
        },
        color: {
            control: { type: 'select', options: ['grey-5', 'grey-10', 'prime-blue-6'] },
            description: 'Sets color.',
            defaultValue: 'grey-10',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: '"grey-10"' },
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Text with different variants.'
            },
            source: {
                code: `<bcm-text>The face of the moon was in shadow.</bcm-text>`
            }
        }
    }
}

const Template = ({ label, ...args }) => <bcm-text {...args}> {label} </bcm-text>

export const Default = Template.bind({})
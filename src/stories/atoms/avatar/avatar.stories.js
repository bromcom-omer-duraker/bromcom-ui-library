import { h } from 'jsx-dom'

export default {
    title: 'Components/Atoms/Avatar',
    component: 'bcm-avatar',
    argTypes: {
        plate: {
            control: { type: 'select', options: ['ellipse', 'square']},
            description: 'Shape of the wrapper.',
            defaultValue: 'ellipse',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'ellipse' },
                type: { summary: 'string' }
            }
        },
        size: {
            control: 'text',
            description: 'Size of the avatar.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'medium' },
                type: { 
                    summary: 'string',
                    detail: 'small | medium | large or custom number' 
                }
            }
        },
        image: {
            control: 'text',
            description: 'Image URL.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        name: {
            control: 'text',
            description: 'Displayed name.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        type: {
            control: { type: 'select', options: ['normal', 'button']},
            description: 'Type of the avatar.',
            defaultValue: 'normal',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Picture or icon to represent the user.'
            },
            source: {
                code: `<bcm-avatar></bcm-avatar>`
            }
        }
    }
}

const Template = (args) => <bcm-avatar {...args}></bcm-avatar>

export const Default = Template.bind({})

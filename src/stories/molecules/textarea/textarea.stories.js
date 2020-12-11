import { h } from 'jsx-dom'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Molecules/Textarea',
    component: 'bcm-textarea',
    argTypes: {
        value: {
            control: 'text',
            description: "The textarea's value attribute.",
            table: {
                category: 'Properties',
                type: { summary: 'string'}
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: "The textarea's size.",
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' }
            }
        },
        label: {
            control: 'text',
            description: "The textarea's label.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        caption: {
            control: 'text',
            description: "The textarea's caption.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        'caption-type': {
            control: { type: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] },
            description: "The caption's type.",
            defaultValue: 'default',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'default' }
            }
        },
        placeholder: {
            control: 'text',
            description: "The textarea's placeholder text.",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
            }
        },
        clearable: {
            control: 'boolean',
            description: 'Set to true to add a clear button when the textarea is populated.',
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Set to true to disable the textarea.',
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
        rows: {
            control: 'number',
            description: 'The number of rows.',
            defaultValue: 1,
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 1 }
            }
        },
        resize: {
            control: { type: 'select', options: ['none', 'vertical', 'auto'] },
            description: 'Controls how the textarea can be resized.',
            defaultValue: 'vertical',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'vertical' }
            }
        },
        'max-length': {
            control: 'number',
            description: 'The maximum length of textarea that will be considered valid.',
            table: {
                category: 'Properties',
                type: { summary: 'number' },
            }
        },
        'full-width': {
            control: 'boolean',
            description: "Set to true to make textarea full width.",
            defaultValue: false,
            table: {
                category: 'Properties',
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        },
        'bcm-focus': {
            description: "Emitted when the textarea focused.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        'bcm-blur': {
            description: "Emitted when the textarea loses focus.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        'bcm-clear': {
            description: "Emitted when the clear button clicked.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        'bcm-change': {
            description: "Emitted when the textarea's value change.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        'bcm-input': {
            description: "Emitted when the textarea element receives input.",
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' },
            }
        },
        setFocus: {
            description: "	Sets focus on the textarea.",
            table: {
                category: 'Methods',
                type: { summary: 'setFocus => Promise' },
            }
        },
        removeFocus: {
            description: "Removes focus from the textarea.",
            table: {
                category: 'Methods',
                type: { summary: 'removeFocus => Promise' },
            }
        },
        select: {
            description: "Selects all the text in the textarea.",
            table: {
                category: 'Methods',
                type: { summary: 'select => Promise' },
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Inputs collect data from the user.'
            },
            source: {
                code: `<bcm-textarea></bcm-textarea>`
            }
        },
    }
}

const Template = (args) => <bcm-textarea {...args} ></bcm-textarea>

export const Default = Template.bind({})

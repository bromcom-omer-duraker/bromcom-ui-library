import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Progress',
    component: 'bcm-progress',
    argTypes: {
        percent: {
            control: { type: 'range', min: 0, max: 100 },
            description: 'To set the completion percentage.',
            defaultValue: 25,
            table: {
                category: 'Properties',
                defaultValue: { summary: 0 },
                type: { summary: 'number' }
            }
        },
        size: {
            control: { type: 'select', options: ['small', 'medium'] },
            description: 'Size of the progress bar.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'medium' },
                type: { summary: 'string' }
            }
        },
        info: {
            control: { type: 'select', options: ['percent', 'icon'] },
            description: 'Info type of the progress.',
            defaultValue: 'icon',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'icon' },
                type: { summary: 'string' }
            }
        },
        error: {
            control: 'boolean',
            description: 'Error status.',
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Display the current progress of an operation flow.'
            },
            source: {
                code: `<bcm-progress></bcm-progress>`
            }
        }
    }
}

export const Default = (args) => (
    <bcm-progress {...args}></bcm-progress>
)

Default.argTypes = {
    type: {
        control: { type: 'select', options: ['line', 'line-rounded', 'circle'] },
        description: 'To set the type.',
        defaultValue: 'line-rounded',
        table: {
            category: 'Properties',
            defaultValue: { summary: 'line-rounded' },
            type: { summary: 'string' }
        }
    }
}

export const Circle = (args) => (
    <bcm-progress {...args} type="circle"></bcm-progress>
)

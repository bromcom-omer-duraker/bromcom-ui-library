import { h } from 'jsx-dom'
import { action } from '@storybook/addon-actions'

const statuses = [
    'success',
    'info',
    'warning',
    'error'
]

export default {
    title: 'Components/Molecules/Result',
    component: 'bcm-result',
    argTypes: {
        status: {
            control: { type: 'select', options: statuses },
            description: 'Result status, decide icons and colors.',
            defaultValue: 'success',
            table: {
                category: 'Properties',
                defaultValue: { summary: '"success"' },
                type: { summary: 'string' }
            }
        },
        heading: {
            control: 'text',
            description: 'The title.',
            defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        desc: {
            control: 'text',
            description: 'The description about result.',
            defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'primary-button-text': {
            control: 'text',
            description: 'Text of the primary button.',
            defaultValue: 'Go Console',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'secondary-button-text': {
            control: 'text',
            description: 'Text of the secondary button.',
            defaultValue: 'Buy Again',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'bcm-pb-click': {
            description: 'Emitted when the primary button clicked.',
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' }
            }
        },
        'bcm-sb-click': {
            description: 'Emitted when the secondary button clicked.',
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' }
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Used to feed back the results of a series of operational tasks.'
            },
            source: {
                code: `<bcm-result></bcm-result>`
            }
        }
    }
}

window.addEventListener('bcm-pb-click', action('bcm-pb-click'))
window.addEventListener('bcm-sb-click', action('bcm-sb-click'))

export const Default = (args) => (
    <bcm-result {...args}>
        <bcm-text weight="semibold" scale="size-3">The content you submitted has the following error:</bcm-text>
        <div style="display: flex;align-items: center;">
            <bcm-icon icon='close-circle' type="outlined" color="red-6"></bcm-icon>
            <bcm-text style="display: inline-block;" scale="size-2">Your account has been frozen Thaw immediately</bcm-text>
        </div>
    </bcm-result>
)

import { h } from 'jsx-dom'
import { action } from '@storybook/addon-actions'

const placements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end'
]

const triggers = [
    'click',
    'hover',
    'focus'
]

export default {
    title: 'Components/Molecules/Popconfirm',
    component: 'bcm-popconfirm',
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Whether the popconfirm is visible or not.',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'booleam' }
            }
        },
        message: {
            control: 'text',
            description: 'Content of the confirmation box.',
            defaultValue: 'Are you sure to delete this homework?',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        'cancel-text': {
            control: 'text',
            description: 'The text of the Cancel button.',
            defaultValue: 'No',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'No' },
                type: { summary: 'string' }
            }
        },
        'okey-text': {
            control: 'text',
            description: 'The text of the Confirm button.',
            defaultValue: 'Yes',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'Yes' },
                type: { summary: 'string' }
            }
        },
        placement: {
            control: { type: 'select', options: placements },
            description: 'The position of the popconfirm relative to the target.',
            defaultValue: 'top',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'top' },
                type: { summary: 'string' }
            }
        },
        trigger: {
            control: { type: 'select', options: triggers, },
            description: 'Popconfirm trigger mode.',
            defaultValue: 'click',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'click' },
                type: { summary: 'string' }
            }
        },
        status: {
            control: { type: 'select', options: ['warning', 'error'], },
            description: 'Popover status.',
            defaultValue: 'warning',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'warning' },
                type: { summary: 'string' }
            }
        },
        'bcm-confirm': {
            action: 'confirmed',
            description: 'A callback of confirmation.',
            table: {
                category: 'Events',
                type: { summary: 'CustomEvent' }
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A simple dialog used for asking for user confirmation.'
            },
            source: {
                code: `<bcm-popconfirm></bcm-popconfirm>`
            }
        }
    }
}

window.addEventListener('bcm-confirm', action('bcm-confirm'))
window.addEventListener('bcm-show', action('bcm-show'))
window.addEventListener('bcm-hide', action('bcm-hide'))

export const Default = (args) => (
    <div style={{marginTop:'96px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <bcm-popconfirm {...args}>
            <bcm-button>Delete Homework</bcm-button>
        </bcm-popconfirm>
    </div>
)

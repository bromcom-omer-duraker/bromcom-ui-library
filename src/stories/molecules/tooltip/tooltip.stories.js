import { h } from 'jsx-dom'

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
    title: 'Components/Molecules/Tooltip',
    component: 'bcm-tooltip',
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Whether the tooltip is visible or not.',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'booleam' }
            }
        },
        message: {
            control: 'text',
            description: 'Tooltip content.',
            defaultValue: 'tooltip text',
            table: {
                category: 'Properties',
            }
        },
        placement: {
            control: { type: 'select', options: placements, },
            description: 'The position of the tooltip relative to the target.',
            defaultValue: 'top',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'top' },
                type: { summary: 'string' }
            }
        },
        trigger: {
            control: { type: 'select', options: triggers, },
            description: 'Tooltip trigger mode.',
            defaultValue: 'hover',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'hover' },
                type: { summary: 'string' }
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A simple text popup tip.'
            },
            source: {
                code: `<bcm-tooltip></bcm-tooltip>`
            }
        }
    }
}

export const Default = (args) => (
    <div style={{marginTop:'48px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <bcm-tooltip {...args}>
            <bcm-button>Trigger to show</bcm-button>
        </bcm-tooltip>
    </div>
)

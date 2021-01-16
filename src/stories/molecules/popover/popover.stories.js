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
    title: 'Components/Molecules/Popover',
    component: 'bcm-tooltip',
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Whether the popover is visible or not.',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'booleam' }
            }
        },
        message: {
            control: 'text',
            description: 'Popover content.',
            defaultValue: 'Popover content goes here and here and here',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        heading: {
            control: 'text',
            description: 'Popover title.',
            defaultValue: 'Popover title',
            table: {
                category: 'Properties',
                type: { summary: 'string' }
            }
        },
        placement: {
            control: { type: 'select', options: placements, },
            description: 'The position of the popover relative to the target.',
            defaultValue: 'top',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'top' },
                type: { summary: 'string' }
            }
        },
        trigger: {
            control: { type: 'select', options: triggers, },
            description: 'Popover trigger mode.',
            defaultValue: 'click',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'click' },
                type: { summary: 'string' }
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A popup card to provide extra information.'
            },
            source: {
                code: `<bcm-popover></bcm-popover>`
            }
        }
    }
}

export const Default = (args) => (
    <div style={{marginTop:'96px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <bcm-popover {...args}>
            <bcm-button>Trigger to show</bcm-button>
        </bcm-popover>
    </div>
)

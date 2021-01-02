import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Card',
    component: 'bcm-card',
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'medium'] },
            description: 'Size of the card.',
            defaultValue: 'medium',
            table: {
                category: 'Properties',
                defaultValue: { summary: '"medium"' },
                type: { summary: 'string' }
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A divider line separates different content..'
            },
            source: {
                code: `<bcm-card></bcm-card>`
            }
        }
    }
}

export const Default = (args) => (
    <div style={{width: '320px'}}>
        <bcm-card {...args}>
            <bcm-card-header>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <bcm-text scale="size-3">Default size card</bcm-text>
                    <bcm-button size="small">More</bcm-button>
                </div>
            </bcm-card-header>

            <bcm-text scale="size-2">Card</bcm-text>
            <bcm-text scale="size-2">Content</bcm-text>

            <bcm-card-footer>Footer</bcm-card-footer>
    </bcm-card>
    </div>
)

import { h } from 'jsx-dom'

export default {
    title: 'Components/Atoms/Divider',
    component: 'bcm-divider',
    argTypes: {
        direction: {
            control: { type: 'select', options: ['horizontal', 'vertical'] },
            description: 'Directon of the divider.',
            defaultValue: 'horizontal',
            table: {
                category: 'Properties',
                defaultValue: { summary: 'horizontal' },
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
                code: `<bcm-divider></bcm-divider>`
            }
        }
    }
}

export const Default = (args) => (
    <div>
        <bcm-text scale="size-5">Title</bcm-text>
        <bcm-divider {...args} ></bcm-divider>

        <bcm-text scale="size-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus accusamus blanditiis ut dignissimos culpa, qui officia earum quae animi eligendi esse optio reprehenderit iusto ducimus vero perferendis dolores soluta libero!</bcm-text>
    </div>
)

Default.argTypes = {
    width: {
        control: 'number',
        description: 'Width of the divider.',
        defaultValue: 100,
        table: {
            category: 'Properties',
            defaultValue: { summary: '100' },
            type: { summary: 'string' }
        }
    }
}

export const Vertical = (args) => (
    <div style="display: flex;">
        <bcm-text>Link</bcm-text>
        <bcm-divider direction="vertical"></bcm-divider>
        <bcm-text>Link</bcm-text>
        <bcm-divider direction="vertical"></bcm-divider>
        <bcm-text>Link</bcm-text>
    </div>
)
import { h } from 'jsx-dom'

export default {
    title: 'Components/Molecules/Collapse',
    component: 'bcm-collapse',
    argTypes: {
        borderless: {
            control: 'boolean',
            description: 'A borderless style of collapse.',
            defaultValue: false,
            table: {
                category: 'Properties',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A content area which can be collapsed and expanded.'
            },
            source: {
                code: `<bcm-collapse></bcm-collapse>`
            }
        }
    }
}

export const Default = (args) => (
    <div style={{ width: '50%' }}>
        <bcm-collapse {...args}>
            <span slot="title" color="grey-9">This is panel header</span>
            <bcm-text slot="body" color="grey-8" scale="size-2">Rapidiously negotiate go forward leadership skills and parallel vortals. Continually reconceptualize top-line solutions whereas just in time growth strategies. Seamlessly procrastinate competitive human.</bcm-text>
        </bcm-collapse>
    </div>
)

export const WithGroup = (args) => (
    <div style={{ width: '50%' }}>
        <bcm-collapse-group {...args}>
            <bcm-collapse>
                <span slot="title" color="grey-9">This is panel header</span>
                <bcm-text slot="body" color="grey-8" scale="size-2">Rapidiously negotiate go forward leadership skills and parallel vortals. Continually reconceptualize top-line solutions whereas just in time growth strategies. Seamlessly procrastinate competitive human.</bcm-text>
            </bcm-collapse>
            <bcm-collapse open>
                <span slot="title" color="grey-9">This is panel header</span>
                <bcm-text slot="body" color="grey-8" scale="size-2">Rapidiously negotiate go forward leadership skills and parallel vortals. Continually reconceptualize top-line solutions whereas just in time growth strategies. Seamlessly procrastinate competitive human.</bcm-text>
            </bcm-collapse>
            <bcm-collapse>
                <span slot="title" color="grey-9">This is panel header</span>
                <bcm-text slot="body" color="grey-8" scale="size-2">Rapidiously negotiate go forward leadership skills and parallel vortals. Continually reconceptualize top-line solutions whereas just in time growth strategies. Seamlessly procrastinate competitive human.</bcm-text>
            </bcm-collapse>
        </bcm-collapse-group>
    </div>
)

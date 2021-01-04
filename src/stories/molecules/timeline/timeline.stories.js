import { h } from 'jsx-dom'
import notes from './timeline.md'

export default {
    title: 'Components/Molecules/Timeline',
    component: 'bcm-checkbox',
    argTypes: {
        type: {
            control: { type: 'select', options: ['left', 'right', 'alternate'] },
            description: 'Allows to change timeline layout/direction',
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
            }
        },
        icon: {
            control: { type: 'select', options: ['cloud-download', 'user'] },
            description: 'Changes bullets with icon',
            table: {
                category: 'Properties',
                type: { summary: 'icon-name' },
                defaultValue: { summary: '' },
            }
        },
        notes
    }
}

const Template = (args) => (
    <bcm-timeline {...args} style="display: block; max-width: 700px;">
        <bcm-timeline-item>
            Lorem ipsum dolor sit amet 
        </bcm-timeline-item>
        <bcm-timeline-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo eleifend, efficitur nisi eu, fermentum metus. Vivamus pellentesque ac sem ac iaculis. Nunc eget fringilla quam.
        </bcm-timeline-item>
        <bcm-timeline-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo eleifend, efficitur nisi eu, fermentum metus. Vivamus pellentesque ac sem ac iaculis. Nunc eget fringilla quam. Nunc pellentesque congue aliquet. Proin lobortis, est in volutpat volutpat, risus lorem ullamcorper mi, id tempus quam elit sit amet est. 
        </bcm-timeline-item>
        <bcm-timeline-item>
            Basic timeline item
        </bcm-timeline-item>
    </bcm-timeline>
)

export const Default = Template.bind({})
Default.args = {}
import { h } from 'jsx-dom'
import notes from './upload.md'

export default {
    title: 'Components/Molecules/Upload',
    component: 'bcm-upload',
    argTypes: {
        'accept-types': {
            control: 'text',
            description: "Accepted file types ex: jpg|png|gif",
            table: {
                category: 'Properties',
                type: { summary: 'string' },
                defaultValue: { summary: 'All Files(*.*)' },
            }
        },
        'multiple-file': {
            control: 'text',
            description: "Number of files",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            }
        },
        'max-file-size': {
            control: 'text',
            description: "Max. file size",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: '10mb' },
            }
        },
        'max-image-width': {
            control: 'text',
            description: "Max. width for image files in pixels",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 'Infinity(px)' },
            }
        },
        'min-image-width': {
            control: 'text',
            description: "Min. height for image files in pixels",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: '1px' },
            }
        },
        'max-image-height': {
            control: 'text',
            description: "Max. height for image files in pixels",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: 'Infinity(px)' },
            }
        },
        'min-image-height': {
            control: 'text',
            description: "Min. height for image files in pixels",
            table: {
                category: 'Properties',
                type: { summary: 'number' },
                defaultValue: { summary: '1px' },
            }
        },
        data: {
            description: "Returns file data in FormData format",
            table: {
                category: 'Methods',
                type: { summary: 'data.getAll("userFile[]")' },
            }
        },
        notes
    }
}

const Template = (args) => (
    <bcm-upload {...args}></bcm-upload>
)

export const Default = Template.bind({})
Default.args = {
    'max-file-size': '10mb'
}

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
            description: "Max. accepted multiple file",
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
                defaultValue: { summary: 1024 },
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
}

export const parameters = {
    options: {
        storySort: {
            order: [
                'Guide and Principles', 
                ['Typography', 'Colours', 'Icons', 'Spacing', 'Grid', 'Media Query', 'Changelog'], 
                'Components', 
                ['Atoms', 
                ['Text', 'Button']]]
        },
    },
    backgrounds: {
        grid: {
            disable: true
        },
        default: 'Light',
        values: [
            {
                name: 'Light',
                value: '#fff'
            },
            {
                name: 'Dark',
                value: '#262626'
            },
        ]
    }
}
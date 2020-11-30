import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import logo from '../bromcom-logo.png'

addons.setConfig({
    panelPosition: 'right',
    theme: {
        ...themes.normal,
        brandUrl: 'https://example.com',
        brandImage: logo
    }
})
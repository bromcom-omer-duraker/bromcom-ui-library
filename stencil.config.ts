import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
    namespace: 'bromcom-ui',
    plugins: [
        sass({
            injectGlobalPaths: [ 'src/global/variables/index.scss' ]
        })
    ],
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'www',
            serviceWorker: null,
            copy: [
                {
                    src: './bromcom.js'
                }
            ]
        },
    ],
}

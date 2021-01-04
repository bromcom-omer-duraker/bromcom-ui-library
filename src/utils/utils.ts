import { ColorPalette } from '../global/variables/colors'

export const getElementAttributes = (nodeMap: NamedNodeMap) => {
    if (nodeMap) {
        const length = nodeMap.length;
        console.log('namedNodeMap: ', nodeMap)
        return Object.keys(nodeMap).reduce((props, current) => {
            try {
                const numCurrent = parseInt(current);
                if (numCurrent < length) {
                    const property = nodeMap[current];
                    return {
                        ...props,
                        [property.name]: property.value,
                    }
                }
            } catch (err) { }
        }, {});
    }
    return {};
}

export const extractColor = (colors: object, colorName: string) => {
    const splitted = colorName.split('-')
    const grade = splitted[splitted.length - 1]
    const swatch = splitted.slice(0, splitted.length - 1).join('-')

    return colors[swatch][grade]
}

export const generateCssVariables = () => {
    let rootColors = '';
    Object.keys(ColorPalette).forEach((color) => {
        Object.keys(ColorPalette[color]).forEach((key) => {
            let variable = `--bcm-color-${color}-${key}: #\{$${color}-${key}\};\n`
            rootColors += variable
        })
    })
    return rootColors;
}

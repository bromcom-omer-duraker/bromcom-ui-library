import { ColorPalette } from '../global/variables/colors'

/**
 * @desc
 * @param nodeMap 
 */
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

/**
 * @desc
 * @param colors 
 * @param colorName 
 */
export const extractColor = (colors: object, colorName: string) => {
    const splitted = colorName.split('-')
    const grade = splitted[splitted.length - 1]
    const swatch = splitted.slice(0, splitted.length - 1).join('-')

    return colors[swatch][grade]
}

/**
 * @desc
 */
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

/**
 * @desc
 */

export function createError(
    // @ts-ignore
    template,
    // @ts-ignore
    arg1: any,
    // @ts-ignore
    arg2?: any,
    // @ts-ignore
    arg3?: any,
    // @ts-ignore
    arg4?: any,
    // @ts-ignore
    arg5?: any,
    // @ts-ignore
    arg6?: any,
    // @ts-ignore
    arg7?: any,
    // @ts-ignore
    arg8?: any,
    // @ts-ignore
    arg9?: any
) {
    let str = arguments[0];
    let curr, pb = false, ts = '', tstr = str, ca = 1;

    for (let i = 0; i < str.length; i++) {
        curr = str[i];
        if (pb) if (curr == '}') {
            tstr = tstr.replace('{' + ts + '}', arguments[ca]);
            pb = false; 
            ts = ''; 
            ca++;
        }
        else ts += curr;
        if (curr == '{') 
            pb = true;
    }

    return tstr;
}
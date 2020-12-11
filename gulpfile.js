const { src, dest, series, parallel } = require('gulp');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

let tsxContent = '';
let resolution = {};
let resolutionFlat = [];
const svgsPath = './src/assets/icons/svg/';
const filePath = './src/assets/icons/';
const svgsPattern = svgsPath + '**/*.svg';
const defaultIconSize = 24;

/**
 * @desc
 * @param {string} str 
 */
const toSnakeCase = (str) => {
    return str.replace(/-/g, '_');
}

/**
 * @desc
 * @param {Object|*} files 
 */
const createResolution = (files) => {
    files.map((file) => {
        // this makes array like ['filled', '24', 'icon.svg']
        // 0 -> type, 1 -> size, 2 -> file
        const nodes = file.replace(svgsPath, '').split('/');
        const type = nodes[0];
        const size = nodes[1];
        const icon = path.parse(path.basename(file));

        const variable = `${toSnakeCase(icon.name)}_${toSnakeCase(type)}_${toSnakeCase(size)}`;
        const importPath = `./svg/${type}/${size}/${icon.base}`;
        const mockVariable = `\\${variable}\\`;

        if (!resolution[icon.name]) {
            resolution[icon.name] = {}
        }

        !resolution[icon.name][type] 
            ? resolution[icon.name][type] = { [size]: mockVariable }
            : resolution[icon.name][type][size] = mockVariable
        ;

        // Also add default icon
        // #
        size == defaultIconSize && (resolution[icon.name][type]['default'] = mockVariable);

        resolutionFlat.push({
            ...icon,
            variable: variable,
            importPath: importPath
        })
    });
};

/**
 * @desc
 * @param {*} cb 
 */
function getSvgFiles () {
    return new Promise((resolve, reject) => {
        glob(svgsPattern, (err, files) => {
            createResolution(files);
            resolve();
        });
    })
}

/**
 * @desc
 * @param {*} cb 
 */
function createRegistryFile (cb) {
    return new Promise((resolve, reject) => {
        let iicon;
        let exportObjectContent;

        tsxContent = '';
        
        // Create imports in script
        // #
        for (let icon in resolutionFlat) {
            iicon = resolutionFlat[icon];
            tsxContent += `
/**
 * ICON: ${iicon.name}
 */
import ${iicon.variable} from '${iicon.importPath}';\n`
        }

        // Create export in script
        // #
        exportObjectContent = JSON.stringify(resolution, null, 4);

        // Remove module value quotes
        // #
        for (let icon in resolutionFlat) {
            iicon = resolutionFlat[icon];
            exportObjectContent = exportObjectContent.replace(/(\"\\\\|\\\\\")/g, '');
        }

        tsxContent += `\n\nexport const SVGIcons = ${exportObjectContent}`;
        resolve();
    })
}

/**
 * @desc
 * @param {*} cb 
 */
function saveRegistryFile (cb) {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(filePath + 'index.tsx', tsxContent);
        resolve();
    });
}

/**
 * @desc
 * @task svg
 * @param {function} cb 
 */
exports.svg = series(getSvgFiles, createRegistryFile, saveRegistryFile);

/**
 * @desc
 * @task default
 * @param {function} cb 
 */
exports.default = (cb) => {
    console.log('Hello from Bromcom UI Library');
    cb();
}
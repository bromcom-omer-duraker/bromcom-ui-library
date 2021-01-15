export interface IImageSizes {
    width: number;
    height: number;
}

/**
 * 'maxFileSize' prop predefined values
 */
export enum FileSizeUnits { 
    b = 'b',
    kb = 'kb',
    mb = 'mb',
}

/**
 * 'maxFileSize' prop types
 */
export declare type FileSizeUnit = keyof typeof FileSizeUnits

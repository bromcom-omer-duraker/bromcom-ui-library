/**
 * 'status' prop predefined values
 */
export enum StatusProps { 
    info = 'info',
    error = 'error',
    warning = 'warning',
    success = 'success',
    none = 'none'
}

/**
 * 'type' prop predefined values
 */
export enum TypeProps { 
    modal = 'modal',
    information = 'information',
    confirmation = 'confirmation'
}

/**
 * 'type' prop predefined values
 */
export enum OrientationProps { 
    portrait = 'portrait',
    landscape = 'landscape'
}

/**
 * 'orientation' prop types
 */
export declare type OrientationProp = keyof typeof OrientationProps

/**
 * 'status' prop types
 */
export declare type StatusProp = keyof typeof StatusProps

/**
 * 'type' prop types
 */
export declare type TypeProp = keyof typeof TypeProps
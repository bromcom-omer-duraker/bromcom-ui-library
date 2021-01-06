/**
 * 'status' prop predefined values
 */
export enum StatusProps { 
    info = 'info',
    error = 'error',
    warning = 'warning',
    success = 'success',
    default = 'default'
}

/**
 * 'status' prop types
 */
export declare type StatusProp = keyof typeof StatusProps

/**
 * 'type' prop predefined values
 */
export enum TypeProps {
    banner = 'banner',
    basic = 'basic'
}

/**
 * 'type' prop types
 */
export declare type TypeProp = keyof typeof TypeProps
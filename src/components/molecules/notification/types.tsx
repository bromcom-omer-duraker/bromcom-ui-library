/**
 * 'type' prop predefined values
 */
export enum TypeProps { 
    info = 'info',
    error = 'error',
    warning = 'warning',
    success = 'success',
    default = 'default'
}

/**
 * 'type' prop types
 */
export declare type TypeProp = keyof typeof TypeProps

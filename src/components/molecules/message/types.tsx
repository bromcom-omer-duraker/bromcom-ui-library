/**
 * 'status' prop predefined values
 */
export enum StatusProps { 
    info = 'info',
    error = 'error',
    warning = 'warning',
    success = 'success'
}

/**
 * 'status' prop types
 */
export declare type StatusProp = keyof typeof StatusProps
/**
 * 'size' prop predefined values
 */
export enum SizeProps { 
    large = 'large',
    medium = 'medium',
    small = 'small'
}

/**
 * 'type' prop predefined values
 */
export enum TypeProps { 
    normal = 'normal',
    pane = 'pane'
}

/**
 * 'type' prop types
 */
export declare type TypeProp = keyof typeof TypeProps

/**
 * 'size' prop types
 */
export declare type SizeProp = keyof typeof SizeProps
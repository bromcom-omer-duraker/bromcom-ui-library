/**
 * 'image' prop predefined values
 */
export enum ImageProps { 
    default = 'default.svg',
    simple = 'simple.svg'
}
/**
 * 'size' prop predefined values
 */
export enum SizeProps { 
    small = 'small',
    medium = 'medium',
    big = 'big'
}

/**
 * 'status' prop types
 */
export declare type SizeProp = keyof typeof SizeProps

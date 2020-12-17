/**
 * 'size' prop predefined values
 */
export enum SizePropPredefinedValues { 
    large = '48', 
    medium = '24', 
    default = '16', 
    small = '12', 
    xsmall = '8' 
}

/**
 * 'size' prop types
 */
export declare type SizePropOptions = keyof typeof SizePropPredefinedValues | number; 

/**
 * 'type' prop types
 */
export declare type TypePropOptions = 'fill' | 'outlined' | 'multi-color' | 'default';

/**
 * 'direction' prop predefined values
 */
export enum Directions {
    horizontal = 'horizontal',
    vertical = 'vertical'
}

/**
 * 'direction' prop types
 */
export declare type Direction = keyof typeof Directions

export interface IAxisKeys {
    pos: string;
    size: string;
    coord: string;
    posOffset: string;
}

export interface IThumbsOrder {
    first: HTMLElement;
    second: HTMLElement
}

export interface ITransformPositions {
    x: number;
    y: number;
}

export interface IDragPoint {
    x: number;
    y: number;
}
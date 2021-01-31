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

/**
 * 'sizeReference' prop predefined values
 */
export enum SizeReferences {
    title = 'title',
    description = 'description',
    none = 'none'
}

/**
 * 'sizeReference' prop types
 */
export declare type SizeReference = keyof typeof SizeReferences

/**
 * 'status' prop predefined values
 */
export enum StepStatuses {
    waiting = 'waiting',
    finished = 'finished',
    active = 'active',
    error = 'error',
    none = 'none'
}

export interface IItem {
    el: any;
    finished?: boolean;
    status?: StepStatuses;
    title?: string;
    description?: string;
    completed?: boolean;
}
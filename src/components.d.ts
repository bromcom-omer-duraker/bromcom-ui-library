/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SizePropOptions, TypePropOptions, UnitPropOptions } from "./components/atoms/icon/icon";
export namespace Components {
    interface BcmAvatar {
        "image": string;
        "name": string;
        "plate": 'ellipse' | 'square';
        "size": 'small' | 'medium' | 'large' | string;
        "type": 'normal' | 'button';
    }
    interface BcmBadge {
        "status": string;
        "type": 'basic' | 'info';
        "value": number;
    }
    interface BcmButton {
        "disabled": boolean;
        "icon": string;
        "iconOnly": boolean;
        "iconPosition": 'left' | 'right';
        "kind": 'solid' | 'ghost';
        "outline": boolean;
        "size": 'small' | 'medium' | 'large';
    }
    interface BcmIcon {
        "color": string;
        "icon": string;
        "size": SizePropOptions;
        "type": TypePropOptions;
        "unit": UnitPropOptions;
    }
    interface BcmInput {
    }
    interface BcmTag {
        "checked": boolean;
        "type": string;
    }
    interface BcmText {
        "color": string;
        "scale": string;
        "weight": 'regular' | 'semibold';
    }
}
declare global {
    interface HTMLBcmAvatarElement extends Components.BcmAvatar, HTMLStencilElement {
    }
    var HTMLBcmAvatarElement: {
        prototype: HTMLBcmAvatarElement;
        new (): HTMLBcmAvatarElement;
    };
    interface HTMLBcmBadgeElement extends Components.BcmBadge, HTMLStencilElement {
    }
    var HTMLBcmBadgeElement: {
        prototype: HTMLBcmBadgeElement;
        new (): HTMLBcmBadgeElement;
    };
    interface HTMLBcmButtonElement extends Components.BcmButton, HTMLStencilElement {
    }
    var HTMLBcmButtonElement: {
        prototype: HTMLBcmButtonElement;
        new (): HTMLBcmButtonElement;
    };
    interface HTMLBcmIconElement extends Components.BcmIcon, HTMLStencilElement {
    }
    var HTMLBcmIconElement: {
        prototype: HTMLBcmIconElement;
        new (): HTMLBcmIconElement;
    };
    interface HTMLBcmInputElement extends Components.BcmInput, HTMLStencilElement {
    }
    var HTMLBcmInputElement: {
        prototype: HTMLBcmInputElement;
        new (): HTMLBcmInputElement;
    };
    interface HTMLBcmTagElement extends Components.BcmTag, HTMLStencilElement {
    }
    var HTMLBcmTagElement: {
        prototype: HTMLBcmTagElement;
        new (): HTMLBcmTagElement;
    };
    interface HTMLBcmTextElement extends Components.BcmText, HTMLStencilElement {
    }
    var HTMLBcmTextElement: {
        prototype: HTMLBcmTextElement;
        new (): HTMLBcmTextElement;
    };
    interface HTMLElementTagNameMap {
        "bcm-avatar": HTMLBcmAvatarElement;
        "bcm-badge": HTMLBcmBadgeElement;
        "bcm-button": HTMLBcmButtonElement;
        "bcm-icon": HTMLBcmIconElement;
        "bcm-input": HTMLBcmInputElement;
        "bcm-tag": HTMLBcmTagElement;
        "bcm-text": HTMLBcmTextElement;
    }
}
declare namespace LocalJSX {
    interface BcmAvatar {
        "image"?: string;
        "name"?: string;
        "plate"?: 'ellipse' | 'square';
        "size"?: 'small' | 'medium' | 'large' | string;
        "type"?: 'normal' | 'button';
    }
    interface BcmBadge {
        "status"?: string;
        "type"?: 'basic' | 'info';
        "value"?: number;
    }
    interface BcmButton {
        "disabled"?: boolean;
        "icon"?: string;
        "iconOnly"?: boolean;
        "iconPosition"?: 'left' | 'right';
        "kind"?: 'solid' | 'ghost';
        "outline"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface BcmIcon {
        "color"?: string;
        "icon"?: string;
        "size"?: SizePropOptions;
        "type"?: TypePropOptions;
        "unit"?: UnitPropOptions;
    }
    interface BcmInput {
    }
    interface BcmTag {
        "checked"?: boolean;
        "onCheckedChange"?: (event: CustomEvent<object>) => void;
        "type"?: string;
    }
    interface BcmText {
        "color"?: string;
        "scale"?: string;
        "weight"?: 'regular' | 'semibold';
    }
    interface IntrinsicElements {
        "bcm-avatar": BcmAvatar;
        "bcm-badge": BcmBadge;
        "bcm-button": BcmButton;
        "bcm-icon": BcmIcon;
        "bcm-input": BcmInput;
        "bcm-tag": BcmTag;
        "bcm-text": BcmText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bcm-avatar": LocalJSX.BcmAvatar & JSXBase.HTMLAttributes<HTMLBcmAvatarElement>;
            "bcm-badge": LocalJSX.BcmBadge & JSXBase.HTMLAttributes<HTMLBcmBadgeElement>;
            "bcm-button": LocalJSX.BcmButton & JSXBase.HTMLAttributes<HTMLBcmButtonElement>;
            "bcm-icon": LocalJSX.BcmIcon & JSXBase.HTMLAttributes<HTMLBcmIconElement>;
            "bcm-input": LocalJSX.BcmInput & JSXBase.HTMLAttributes<HTMLBcmInputElement>;
            "bcm-tag": LocalJSX.BcmTag & JSXBase.HTMLAttributes<HTMLBcmTagElement>;
            "bcm-text": LocalJSX.BcmText & JSXBase.HTMLAttributes<HTMLBcmTextElement>;
        }
    }
}

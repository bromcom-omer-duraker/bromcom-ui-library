/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColorPaletteTypes } from "./global/variables/colors";
import { SizePropOptions, TypePropOptions } from "./components/atoms/icon/types";
import { OptionType } from "./components/molecules/radio/group";
import { OptionWithGroupType } from "./components/molecules/select/select";
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
        "iconPosition": 'prefix' | 'suffix';
        "kind": 'solid' | 'ghost';
        "outline": boolean;
        "size": 'small' | 'medium' | 'large';
    }
    interface BcmCard {
        "size": 'small' | 'medium';
    }
    interface BcmCardFooter {
    }
    interface BcmCardHeader {
    }
    interface BcmCheckbox {
        /**
          * @desc 
          * @param name -
          * @returns
         */
        "check": (uncheck: boolean) => Promise<void>;
        "checked": boolean;
        "disabled": boolean;
        "name": string;
        "readOnly": boolean;
        /**
          * Component Properties
         */
        "value": any;
    }
    interface BcmCheckboxGroup {
        /**
          * @desc 
          * @param name -
          * @returns
         */
        "checked": (name?: string) => Promise<boolean | Object | any[]>;
        /**
          * Component Properties
         */
        "direction": 'horizontal' | 'vertical';
        "indeterminate": boolean;
        "items": Array<object> | string;
        "name": string;
        "value": any;
    }
    interface BcmDivider {
        "direction": 'vertical' | 'horizontal';
        "width": string;
    }
    interface BcmIcon {
        /**
          * Component Properties
         */
        "color": ColorPaletteTypes | 'currentColor';
        "icon": string;
        "size": SizePropOptions;
        "type": TypePropOptions;
    }
    interface BcmInput {
        "caption": string;
        "captionType": 'primary' | 'success' | 'warning' | 'error' | 'default';
        "clearable": boolean;
        "disabled": boolean;
        "fullWidth": boolean;
        "label": string;
        "name": string;
        "noDefaultIcon": boolean;
        "passwordToggle": boolean;
        "placeholder": string;
        "removeFocus": () => Promise<void>;
        "select": () => Promise<void>;
        "setFocus": () => Promise<void>;
        "size": 'small' | 'medium' | 'large';
        "type": string;
        "value": any;
    }
    interface BcmRadio {
        "buttonStyle": 'solid' | 'outline';
        "checked": boolean;
        "disabled": boolean;
        "optionType": 'default' | 'button';
        "size": 'small' | 'medium' | 'large';
        "value": string | number;
    }
    interface BcmRadioGroup {
        "buttonStyle": 'solid' | 'outline';
        "direction": 'vertical' | 'horizontal';
        "name": string;
        "optionType": 'default' | 'button';
        "options": OptionType[] | string;
        "size": 'small' | 'medium' | 'large';
        "value": string | number;
    }
    interface BcmSelect {
        "caption": string;
        "captionType": 'primary' | 'success' | 'warning' | 'error' | 'default';
        "clearable": boolean;
        "disabled": boolean;
        "flex": boolean;
        "labelProp": string;
        "name": string;
        "options": string | string | OptionWithGroupType[];
        "scrollable": 'none' | 'vertical' | 'horizontal' | 'both';
        "size": 'small' | 'medium' | 'large';
        "value": string;
    }
    interface BcmSelectGroup {
        "heading": string;
    }
    interface BcmSelectOption {
        "disabled": boolean;
        "getLabel": () => Promise<string>;
        "selected": boolean;
        "value": string;
    }
    interface BcmSplitButton {
        "disabled": boolean;
        "icon": string;
        "iconPosition": 'prefix' | 'suffix';
        "outline": boolean;
        "size": 'small' | 'medium' | 'large';
        "text": string;
    }
    interface BcmSplitItem {
        "icon": string;
        "iconPosition": 'prefix' | 'suffix';
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
    interface BcmTextarea {
        "caption": string;
        "captionType": 'default' | 'primary' | 'success' | 'warning' | 'error';
        "clearable": boolean;
        "disabled": boolean;
        "fullWidth": boolean;
        "label": string;
        "maxLength": number;
        "name": string;
        "placeholder": string;
        "removeFocus": () => Promise<void>;
        "resize": 'vertical' | 'none' | 'auto';
        "rows": number;
        "select": () => Promise<void>;
        "setFocus": () => Promise<void>;
        "size": 'small' | 'medium' | 'large';
        "value": string;
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
    interface HTMLBcmCardElement extends Components.BcmCard, HTMLStencilElement {
    }
    var HTMLBcmCardElement: {
        prototype: HTMLBcmCardElement;
        new (): HTMLBcmCardElement;
    };
    interface HTMLBcmCardFooterElement extends Components.BcmCardFooter, HTMLStencilElement {
    }
    var HTMLBcmCardFooterElement: {
        prototype: HTMLBcmCardFooterElement;
        new (): HTMLBcmCardFooterElement;
    };
    interface HTMLBcmCardHeaderElement extends Components.BcmCardHeader, HTMLStencilElement {
    }
    var HTMLBcmCardHeaderElement: {
        prototype: HTMLBcmCardHeaderElement;
        new (): HTMLBcmCardHeaderElement;
    };
    interface HTMLBcmCheckboxElement extends Components.BcmCheckbox, HTMLStencilElement {
    }
    var HTMLBcmCheckboxElement: {
        prototype: HTMLBcmCheckboxElement;
        new (): HTMLBcmCheckboxElement;
    };
    interface HTMLBcmCheckboxGroupElement extends Components.BcmCheckboxGroup, HTMLStencilElement {
    }
    var HTMLBcmCheckboxGroupElement: {
        prototype: HTMLBcmCheckboxGroupElement;
        new (): HTMLBcmCheckboxGroupElement;
    };
    interface HTMLBcmDividerElement extends Components.BcmDivider, HTMLStencilElement {
    }
    var HTMLBcmDividerElement: {
        prototype: HTMLBcmDividerElement;
        new (): HTMLBcmDividerElement;
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
    interface HTMLBcmRadioElement extends Components.BcmRadio, HTMLStencilElement {
    }
    var HTMLBcmRadioElement: {
        prototype: HTMLBcmRadioElement;
        new (): HTMLBcmRadioElement;
    };
    interface HTMLBcmRadioGroupElement extends Components.BcmRadioGroup, HTMLStencilElement {
    }
    var HTMLBcmRadioGroupElement: {
        prototype: HTMLBcmRadioGroupElement;
        new (): HTMLBcmRadioGroupElement;
    };
    interface HTMLBcmSelectElement extends Components.BcmSelect, HTMLStencilElement {
    }
    var HTMLBcmSelectElement: {
        prototype: HTMLBcmSelectElement;
        new (): HTMLBcmSelectElement;
    };
    interface HTMLBcmSelectGroupElement extends Components.BcmSelectGroup, HTMLStencilElement {
    }
    var HTMLBcmSelectGroupElement: {
        prototype: HTMLBcmSelectGroupElement;
        new (): HTMLBcmSelectGroupElement;
    };
    interface HTMLBcmSelectOptionElement extends Components.BcmSelectOption, HTMLStencilElement {
    }
    var HTMLBcmSelectOptionElement: {
        prototype: HTMLBcmSelectOptionElement;
        new (): HTMLBcmSelectOptionElement;
    };
    interface HTMLBcmSplitButtonElement extends Components.BcmSplitButton, HTMLStencilElement {
    }
    var HTMLBcmSplitButtonElement: {
        prototype: HTMLBcmSplitButtonElement;
        new (): HTMLBcmSplitButtonElement;
    };
    interface HTMLBcmSplitItemElement extends Components.BcmSplitItem, HTMLStencilElement {
    }
    var HTMLBcmSplitItemElement: {
        prototype: HTMLBcmSplitItemElement;
        new (): HTMLBcmSplitItemElement;
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
    interface HTMLBcmTextareaElement extends Components.BcmTextarea, HTMLStencilElement {
    }
    var HTMLBcmTextareaElement: {
        prototype: HTMLBcmTextareaElement;
        new (): HTMLBcmTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "bcm-avatar": HTMLBcmAvatarElement;
        "bcm-badge": HTMLBcmBadgeElement;
        "bcm-button": HTMLBcmButtonElement;
        "bcm-card": HTMLBcmCardElement;
        "bcm-card-footer": HTMLBcmCardFooterElement;
        "bcm-card-header": HTMLBcmCardHeaderElement;
        "bcm-checkbox": HTMLBcmCheckboxElement;
        "bcm-checkbox-group": HTMLBcmCheckboxGroupElement;
        "bcm-divider": HTMLBcmDividerElement;
        "bcm-icon": HTMLBcmIconElement;
        "bcm-input": HTMLBcmInputElement;
        "bcm-radio": HTMLBcmRadioElement;
        "bcm-radio-group": HTMLBcmRadioGroupElement;
        "bcm-select": HTMLBcmSelectElement;
        "bcm-select-group": HTMLBcmSelectGroupElement;
        "bcm-select-option": HTMLBcmSelectOptionElement;
        "bcm-split-button": HTMLBcmSplitButtonElement;
        "bcm-split-item": HTMLBcmSplitItemElement;
        "bcm-tag": HTMLBcmTagElement;
        "bcm-text": HTMLBcmTextElement;
        "bcm-textarea": HTMLBcmTextareaElement;
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
        "iconPosition"?: 'prefix' | 'suffix';
        "kind"?: 'solid' | 'ghost';
        "outline"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface BcmCard {
        "size"?: 'small' | 'medium';
    }
    interface BcmCardFooter {
    }
    interface BcmCardHeader {
    }
    interface BcmCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "name"?: string;
        /**
          * Component Events
         */
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "readOnly"?: boolean;
        /**
          * Component Properties
         */
        "value"?: any;
    }
    interface BcmCheckboxGroup {
        /**
          * Component Properties
         */
        "direction"?: 'horizontal' | 'vertical';
        "indeterminate"?: boolean;
        "items"?: Array<object> | string;
        "name"?: string;
        /**
          * Component Events
         */
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "value"?: any;
    }
    interface BcmDivider {
        "direction"?: 'vertical' | 'horizontal';
        "width"?: string;
    }
    interface BcmIcon {
        /**
          * Component Properties
         */
        "color"?: ColorPaletteTypes | 'currentColor';
        "icon"?: string;
        "size"?: SizePropOptions;
        "type"?: TypePropOptions;
    }
    interface BcmInput {
        "caption"?: string;
        "captionType"?: 'primary' | 'success' | 'warning' | 'error' | 'default';
        "clearable"?: boolean;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "label"?: string;
        "name"?: string;
        "noDefaultIcon"?: boolean;
        "onBcm-blur"?: (event: CustomEvent<any>) => void;
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "onBcm-clear"?: (event: CustomEvent<any>) => void;
        "onBcm-focus"?: (event: CustomEvent<any>) => void;
        "onBcm-input"?: (event: CustomEvent<any>) => void;
        "passwordToggle"?: boolean;
        "placeholder"?: string;
        "size"?: 'small' | 'medium' | 'large';
        "type"?: string;
        "value"?: any;
    }
    interface BcmRadio {
        "buttonStyle"?: 'solid' | 'outline';
        "checked"?: boolean;
        "disabled"?: boolean;
        "onBcm-blur"?: (event: CustomEvent<any>) => void;
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "onBcm-focus"?: (event: CustomEvent<any>) => void;
        "optionType"?: 'default' | 'button';
        "size"?: 'small' | 'medium' | 'large';
        "value"?: string | number;
    }
    interface BcmRadioGroup {
        "buttonStyle"?: 'solid' | 'outline';
        "direction"?: 'vertical' | 'horizontal';
        "name"?: string;
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "optionType"?: 'default' | 'button';
        "options"?: OptionType[] | string;
        "size"?: 'small' | 'medium' | 'large';
        "value"?: string | number;
    }
    interface BcmSelect {
        "caption"?: string;
        "captionType"?: 'primary' | 'success' | 'warning' | 'error' | 'default';
        "clearable"?: boolean;
        "disabled"?: boolean;
        "flex"?: boolean;
        "labelProp"?: string;
        "name"?: string;
        "onBcm-blur"?: (event: CustomEvent<any>) => void;
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "onBcm-clear"?: (event: CustomEvent<any>) => void;
        "onBcm-focus"?: (event: CustomEvent<any>) => void;
        "options"?: string | string | OptionWithGroupType[];
        "scrollable"?: 'none' | 'vertical' | 'horizontal' | 'both';
        "size"?: 'small' | 'medium' | 'large';
        "value"?: string;
    }
    interface BcmSelectGroup {
        "heading"?: string;
    }
    interface BcmSelectOption {
        "disabled"?: boolean;
        "selected"?: boolean;
        "value"?: string;
    }
    interface BcmSplitButton {
        "disabled"?: boolean;
        "icon"?: string;
        "iconPosition"?: 'prefix' | 'suffix';
        "outline"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
        "text"?: string;
    }
    interface BcmSplitItem {
        "icon"?: string;
        "iconPosition"?: 'prefix' | 'suffix';
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
    interface BcmTextarea {
        "caption"?: string;
        "captionType"?: 'default' | 'primary' | 'success' | 'warning' | 'error';
        "clearable"?: boolean;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "label"?: string;
        "maxLength"?: number;
        "name"?: string;
        "onBcm-blur"?: (event: CustomEvent<any>) => void;
        "onBcm-change"?: (event: CustomEvent<any>) => void;
        "onBcm-clear"?: (event: CustomEvent<any>) => void;
        "onBcm-focus"?: (event: CustomEvent<any>) => void;
        "onBcm-input"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "resize"?: 'vertical' | 'none' | 'auto';
        "rows"?: number;
        "size"?: 'small' | 'medium' | 'large';
        "value"?: string;
    }
    interface IntrinsicElements {
        "bcm-avatar": BcmAvatar;
        "bcm-badge": BcmBadge;
        "bcm-button": BcmButton;
        "bcm-card": BcmCard;
        "bcm-card-footer": BcmCardFooter;
        "bcm-card-header": BcmCardHeader;
        "bcm-checkbox": BcmCheckbox;
        "bcm-checkbox-group": BcmCheckboxGroup;
        "bcm-divider": BcmDivider;
        "bcm-icon": BcmIcon;
        "bcm-input": BcmInput;
        "bcm-radio": BcmRadio;
        "bcm-radio-group": BcmRadioGroup;
        "bcm-select": BcmSelect;
        "bcm-select-group": BcmSelectGroup;
        "bcm-select-option": BcmSelectOption;
        "bcm-split-button": BcmSplitButton;
        "bcm-split-item": BcmSplitItem;
        "bcm-tag": BcmTag;
        "bcm-text": BcmText;
        "bcm-textarea": BcmTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bcm-avatar": LocalJSX.BcmAvatar & JSXBase.HTMLAttributes<HTMLBcmAvatarElement>;
            "bcm-badge": LocalJSX.BcmBadge & JSXBase.HTMLAttributes<HTMLBcmBadgeElement>;
            "bcm-button": LocalJSX.BcmButton & JSXBase.HTMLAttributes<HTMLBcmButtonElement>;
            "bcm-card": LocalJSX.BcmCard & JSXBase.HTMLAttributes<HTMLBcmCardElement>;
            "bcm-card-footer": LocalJSX.BcmCardFooter & JSXBase.HTMLAttributes<HTMLBcmCardFooterElement>;
            "bcm-card-header": LocalJSX.BcmCardHeader & JSXBase.HTMLAttributes<HTMLBcmCardHeaderElement>;
            "bcm-checkbox": LocalJSX.BcmCheckbox & JSXBase.HTMLAttributes<HTMLBcmCheckboxElement>;
            "bcm-checkbox-group": LocalJSX.BcmCheckboxGroup & JSXBase.HTMLAttributes<HTMLBcmCheckboxGroupElement>;
            "bcm-divider": LocalJSX.BcmDivider & JSXBase.HTMLAttributes<HTMLBcmDividerElement>;
            "bcm-icon": LocalJSX.BcmIcon & JSXBase.HTMLAttributes<HTMLBcmIconElement>;
            "bcm-input": LocalJSX.BcmInput & JSXBase.HTMLAttributes<HTMLBcmInputElement>;
            "bcm-radio": LocalJSX.BcmRadio & JSXBase.HTMLAttributes<HTMLBcmRadioElement>;
            "bcm-radio-group": LocalJSX.BcmRadioGroup & JSXBase.HTMLAttributes<HTMLBcmRadioGroupElement>;
            "bcm-select": LocalJSX.BcmSelect & JSXBase.HTMLAttributes<HTMLBcmSelectElement>;
            "bcm-select-group": LocalJSX.BcmSelectGroup & JSXBase.HTMLAttributes<HTMLBcmSelectGroupElement>;
            "bcm-select-option": LocalJSX.BcmSelectOption & JSXBase.HTMLAttributes<HTMLBcmSelectOptionElement>;
            "bcm-split-button": LocalJSX.BcmSplitButton & JSXBase.HTMLAttributes<HTMLBcmSplitButtonElement>;
            "bcm-split-item": LocalJSX.BcmSplitItem & JSXBase.HTMLAttributes<HTMLBcmSplitItemElement>;
            "bcm-tag": LocalJSX.BcmTag & JSXBase.HTMLAttributes<HTMLBcmTagElement>;
            "bcm-text": LocalJSX.BcmText & JSXBase.HTMLAttributes<HTMLBcmTextElement>;
            "bcm-textarea": LocalJSX.BcmTextarea & JSXBase.HTMLAttributes<HTMLBcmTextareaElement>;
        }
    }
}

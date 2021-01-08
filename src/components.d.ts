/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { StatusProp, TypeProp } from "./components/molecules/alert/types";
import { ItemType } from "./components/molecules/breadcrumb/breadcrumb";
import { ColorPaletteTypes } from "./global/variables/colors";
import { SizePropOptions, TypePropOptions } from "./components/atoms/icon/types";
import { StatusProp as StatusProp1 } from "./components/molecules/message/types";
import { TypeProp as TypeProp1 } from "./components/molecules/notification/types";
import { OptionType } from "./components/molecules/radio/group";
import { OptionWithGroupType } from "./components/molecules/select/select";
export namespace Components {
    interface BcmAlert {
        /**
          * Component Properties
         */
        "_title": string;
        "bigIcon"?: boolean;
        "dissmisable"?: string | boolean;
        "fullWidth"?: boolean;
        "icon"?: boolean;
        "status"?: StatusProp;
        "type"?: TypeProp;
    }
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
    interface BcmBreadcrumb {
        "items": Array<ItemType>;
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
    interface BcmCollapse {
        "borderless": boolean;
        "open": boolean;
    }
    interface BcmCollapseGroup {
        "borderless": boolean;
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
    interface BcmLink {
        "href": string;
        "icon": string;
        "target": string;
    }
    interface BcmMessage {
        /**
          * Component Properties
         */
        "_title": string;
        "fullWidth"?: boolean;
        "status"?: StatusProp;
    }
    interface BcmNotification {
        /**
          * Component Properties
         */
        "_title": string;
        "confirmable"?: boolean;
        "status"?: TypeProp;
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
    interface BcmSwitch {
        "activeIcon": string;
        "activeText": string;
        "checked": boolean;
        "disabled": boolean;
        "inactiveIcon": string;
        "inactiveText": string;
        "pending": boolean;
        "size": 'small' | 'medium';
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
    interface BcmTimeline {
        /**
          * Component Properties
         */
        "icon": string;
        "type": 'left' | 'right' | 'alternate';
    }
    interface BcmTimelineItem {
        /**
          * Component Properties
         */
        "even": boolean;
        "first": boolean;
        "icon": string;
        "last": boolean;
        "timelineType": 'left' | 'right' | 'alternate';
    }
}
declare global {
    interface HTMLBcmAlertElement extends Components.BcmAlert, HTMLStencilElement {
    }
    var HTMLBcmAlertElement: {
        prototype: HTMLBcmAlertElement;
        new (): HTMLBcmAlertElement;
    };
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
    interface HTMLBcmBreadcrumbElement extends Components.BcmBreadcrumb, HTMLStencilElement {
    }
    var HTMLBcmBreadcrumbElement: {
        prototype: HTMLBcmBreadcrumbElement;
        new (): HTMLBcmBreadcrumbElement;
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
    interface HTMLBcmCollapseElement extends Components.BcmCollapse, HTMLStencilElement {
    }
    var HTMLBcmCollapseElement: {
        prototype: HTMLBcmCollapseElement;
        new (): HTMLBcmCollapseElement;
    };
    interface HTMLBcmCollapseGroupElement extends Components.BcmCollapseGroup, HTMLStencilElement {
    }
    var HTMLBcmCollapseGroupElement: {
        prototype: HTMLBcmCollapseGroupElement;
        new (): HTMLBcmCollapseGroupElement;
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
    interface HTMLBcmLinkElement extends Components.BcmLink, HTMLStencilElement {
    }
    var HTMLBcmLinkElement: {
        prototype: HTMLBcmLinkElement;
        new (): HTMLBcmLinkElement;
    };
    interface HTMLBcmMessageElement extends Components.BcmMessage, HTMLStencilElement {
    }
    var HTMLBcmMessageElement: {
        prototype: HTMLBcmMessageElement;
        new (): HTMLBcmMessageElement;
    };
    interface HTMLBcmNotificationElement extends Components.BcmNotification, HTMLStencilElement {
    }
    var HTMLBcmNotificationElement: {
        prototype: HTMLBcmNotificationElement;
        new (): HTMLBcmNotificationElement;
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
    interface HTMLBcmSwitchElement extends Components.BcmSwitch, HTMLStencilElement {
    }
    var HTMLBcmSwitchElement: {
        prototype: HTMLBcmSwitchElement;
        new (): HTMLBcmSwitchElement;
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
    interface HTMLBcmTimelineElement extends Components.BcmTimeline, HTMLStencilElement {
    }
    var HTMLBcmTimelineElement: {
        prototype: HTMLBcmTimelineElement;
        new (): HTMLBcmTimelineElement;
    };
    interface HTMLBcmTimelineItemElement extends Components.BcmTimelineItem, HTMLStencilElement {
    }
    var HTMLBcmTimelineItemElement: {
        prototype: HTMLBcmTimelineItemElement;
        new (): HTMLBcmTimelineItemElement;
    };
    interface HTMLElementTagNameMap {
        "bcm-alert": HTMLBcmAlertElement;
        "bcm-avatar": HTMLBcmAvatarElement;
        "bcm-badge": HTMLBcmBadgeElement;
        "bcm-breadcrumb": HTMLBcmBreadcrumbElement;
        "bcm-button": HTMLBcmButtonElement;
        "bcm-card": HTMLBcmCardElement;
        "bcm-card-footer": HTMLBcmCardFooterElement;
        "bcm-card-header": HTMLBcmCardHeaderElement;
        "bcm-checkbox": HTMLBcmCheckboxElement;
        "bcm-checkbox-group": HTMLBcmCheckboxGroupElement;
        "bcm-collapse": HTMLBcmCollapseElement;
        "bcm-collapse-group": HTMLBcmCollapseGroupElement;
        "bcm-divider": HTMLBcmDividerElement;
        "bcm-icon": HTMLBcmIconElement;
        "bcm-input": HTMLBcmInputElement;
        "bcm-link": HTMLBcmLinkElement;
        "bcm-message": HTMLBcmMessageElement;
        "bcm-notification": HTMLBcmNotificationElement;
        "bcm-radio": HTMLBcmRadioElement;
        "bcm-radio-group": HTMLBcmRadioGroupElement;
        "bcm-select": HTMLBcmSelectElement;
        "bcm-select-group": HTMLBcmSelectGroupElement;
        "bcm-select-option": HTMLBcmSelectOptionElement;
        "bcm-split-button": HTMLBcmSplitButtonElement;
        "bcm-split-item": HTMLBcmSplitItemElement;
        "bcm-switch": HTMLBcmSwitchElement;
        "bcm-tag": HTMLBcmTagElement;
        "bcm-text": HTMLBcmTextElement;
        "bcm-textarea": HTMLBcmTextareaElement;
        "bcm-timeline": HTMLBcmTimelineElement;
        "bcm-timeline-item": HTMLBcmTimelineItemElement;
    }
}
declare namespace LocalJSX {
    interface BcmAlert {
        /**
          * Component Properties
         */
        "_title"?: string;
        "bigIcon"?: boolean;
        "dissmisable"?: string | boolean;
        "fullWidth"?: boolean;
        "icon"?: boolean;
        "status"?: StatusProp;
        "type"?: TypeProp;
    }
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
    interface BcmBreadcrumb {
        "items"?: Array<ItemType>;
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
    interface BcmCollapse {
        "borderless"?: boolean;
        "onBcm-open"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
    }
    interface BcmCollapseGroup {
        "borderless"?: boolean;
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
    interface BcmLink {
        "href"?: string;
        "icon"?: string;
        "target"?: string;
    }
    interface BcmMessage {
        /**
          * Component Properties
         */
        "_title"?: string;
        "fullWidth"?: boolean;
        "status"?: StatusProp;
    }
    interface BcmNotification {
        /**
          * Component Properties
         */
        "_title"?: string;
        "confirmable"?: boolean;
        /**
          * Component Events
         */
        "onBcm-confirm"?: (event: CustomEvent<any>) => void;
        "status"?: TypeProp;
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
    interface BcmSwitch {
        "activeIcon"?: string;
        "activeText"?: string;
        "checked"?: boolean;
        "disabled"?: boolean;
        "inactiveIcon"?: string;
        "inactiveText"?: string;
        "pending"?: boolean;
        "size"?: 'small' | 'medium';
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
    interface BcmTimeline {
        /**
          * Component Properties
         */
        "icon"?: string;
        "type"?: 'left' | 'right' | 'alternate';
    }
    interface BcmTimelineItem {
        /**
          * Component Properties
         */
        "even"?: boolean;
        "first"?: boolean;
        "icon"?: string;
        "last"?: boolean;
        "timelineType"?: 'left' | 'right' | 'alternate';
    }
    interface IntrinsicElements {
        "bcm-alert": BcmAlert;
        "bcm-avatar": BcmAvatar;
        "bcm-badge": BcmBadge;
        "bcm-breadcrumb": BcmBreadcrumb;
        "bcm-button": BcmButton;
        "bcm-card": BcmCard;
        "bcm-card-footer": BcmCardFooter;
        "bcm-card-header": BcmCardHeader;
        "bcm-checkbox": BcmCheckbox;
        "bcm-checkbox-group": BcmCheckboxGroup;
        "bcm-collapse": BcmCollapse;
        "bcm-collapse-group": BcmCollapseGroup;
        "bcm-divider": BcmDivider;
        "bcm-icon": BcmIcon;
        "bcm-input": BcmInput;
        "bcm-link": BcmLink;
        "bcm-message": BcmMessage;
        "bcm-notification": BcmNotification;
        "bcm-radio": BcmRadio;
        "bcm-radio-group": BcmRadioGroup;
        "bcm-select": BcmSelect;
        "bcm-select-group": BcmSelectGroup;
        "bcm-select-option": BcmSelectOption;
        "bcm-split-button": BcmSplitButton;
        "bcm-split-item": BcmSplitItem;
        "bcm-switch": BcmSwitch;
        "bcm-tag": BcmTag;
        "bcm-text": BcmText;
        "bcm-textarea": BcmTextarea;
        "bcm-timeline": BcmTimeline;
        "bcm-timeline-item": BcmTimelineItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bcm-alert": LocalJSX.BcmAlert & JSXBase.HTMLAttributes<HTMLBcmAlertElement>;
            "bcm-avatar": LocalJSX.BcmAvatar & JSXBase.HTMLAttributes<HTMLBcmAvatarElement>;
            "bcm-badge": LocalJSX.BcmBadge & JSXBase.HTMLAttributes<HTMLBcmBadgeElement>;
            "bcm-breadcrumb": LocalJSX.BcmBreadcrumb & JSXBase.HTMLAttributes<HTMLBcmBreadcrumbElement>;
            "bcm-button": LocalJSX.BcmButton & JSXBase.HTMLAttributes<HTMLBcmButtonElement>;
            "bcm-card": LocalJSX.BcmCard & JSXBase.HTMLAttributes<HTMLBcmCardElement>;
            "bcm-card-footer": LocalJSX.BcmCardFooter & JSXBase.HTMLAttributes<HTMLBcmCardFooterElement>;
            "bcm-card-header": LocalJSX.BcmCardHeader & JSXBase.HTMLAttributes<HTMLBcmCardHeaderElement>;
            "bcm-checkbox": LocalJSX.BcmCheckbox & JSXBase.HTMLAttributes<HTMLBcmCheckboxElement>;
            "bcm-checkbox-group": LocalJSX.BcmCheckboxGroup & JSXBase.HTMLAttributes<HTMLBcmCheckboxGroupElement>;
            "bcm-collapse": LocalJSX.BcmCollapse & JSXBase.HTMLAttributes<HTMLBcmCollapseElement>;
            "bcm-collapse-group": LocalJSX.BcmCollapseGroup & JSXBase.HTMLAttributes<HTMLBcmCollapseGroupElement>;
            "bcm-divider": LocalJSX.BcmDivider & JSXBase.HTMLAttributes<HTMLBcmDividerElement>;
            "bcm-icon": LocalJSX.BcmIcon & JSXBase.HTMLAttributes<HTMLBcmIconElement>;
            "bcm-input": LocalJSX.BcmInput & JSXBase.HTMLAttributes<HTMLBcmInputElement>;
            "bcm-link": LocalJSX.BcmLink & JSXBase.HTMLAttributes<HTMLBcmLinkElement>;
            "bcm-message": LocalJSX.BcmMessage & JSXBase.HTMLAttributes<HTMLBcmMessageElement>;
            "bcm-notification": LocalJSX.BcmNotification & JSXBase.HTMLAttributes<HTMLBcmNotificationElement>;
            "bcm-radio": LocalJSX.BcmRadio & JSXBase.HTMLAttributes<HTMLBcmRadioElement>;
            "bcm-radio-group": LocalJSX.BcmRadioGroup & JSXBase.HTMLAttributes<HTMLBcmRadioGroupElement>;
            "bcm-select": LocalJSX.BcmSelect & JSXBase.HTMLAttributes<HTMLBcmSelectElement>;
            "bcm-select-group": LocalJSX.BcmSelectGroup & JSXBase.HTMLAttributes<HTMLBcmSelectGroupElement>;
            "bcm-select-option": LocalJSX.BcmSelectOption & JSXBase.HTMLAttributes<HTMLBcmSelectOptionElement>;
            "bcm-split-button": LocalJSX.BcmSplitButton & JSXBase.HTMLAttributes<HTMLBcmSplitButtonElement>;
            "bcm-split-item": LocalJSX.BcmSplitItem & JSXBase.HTMLAttributes<HTMLBcmSplitItemElement>;
            "bcm-switch": LocalJSX.BcmSwitch & JSXBase.HTMLAttributes<HTMLBcmSwitchElement>;
            "bcm-tag": LocalJSX.BcmTag & JSXBase.HTMLAttributes<HTMLBcmTagElement>;
            "bcm-text": LocalJSX.BcmText & JSXBase.HTMLAttributes<HTMLBcmTextElement>;
            "bcm-textarea": LocalJSX.BcmTextarea & JSXBase.HTMLAttributes<HTMLBcmTextareaElement>;
            "bcm-timeline": LocalJSX.BcmTimeline & JSXBase.HTMLAttributes<HTMLBcmTimelineElement>;
            "bcm-timeline-item": LocalJSX.BcmTimelineItem & JSXBase.HTMLAttributes<HTMLBcmTimelineItemElement>;
        }
    }
}

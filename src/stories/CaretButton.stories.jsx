import React from "react";
import {CaretButton} from "./CaretButton";
import { caretDirectionTypes, variantTypes } from "./constant";
export default {
    title: 'Buttons/CaretButton',
    component: CaretButton,
    argTypes : {
        label: {
            control : 'text'
        },
        isDisabled: { control: 'boolean' },
        isHovered: { control: 'boolean' },
        color: { control: 'radio', options: variantTypes},
        caretDirection: { control: 'radio', options: caretDirectionTypes},
        onClick: { action: 'clicked' }
    },
}


const Template = (args) => <CaretButton {...args} />;

export const PrimaryIdle = Template.bind({});
PrimaryIdle.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: false,
    isHovered: false,
    caretDirection: 'right'
};
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: true,
    isHovered: false,
    caretDirection: 'right'
};
export const PrimaryHovered = Template.bind({});
PrimaryHovered.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: false,
    isHovered: true,
    caretDirection: 'right'
};
export const SecondaryIdle = Template.bind({});
SecondaryIdle.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: false,
    isHovered: false,
    caretDirection: 'right'
};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: true,
    isHovered: false,
    caretDirection: 'right'
};
export const SecondaryHovered = Template.bind({});
SecondaryHovered.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: false,
    isHovered: true,
    caretDirection: 'right'
};
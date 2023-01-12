import React from "react";
import Button from "./Button";
import { variantTypes } from "./constant";

export default {
    title: 'Buttons/Button',
    component: Button,
    argTypes : {
        label: {
            control : 'text'
        },
        isDisabled: { control: 'boolean' },
        isHovered: { control: 'boolean' },
        color: { control: 'radio', options: variantTypes},
        onClick: { action: 'clicked' }
    },
}


const Template = (args) => <Button {...args} />;

export const PrimaryIdle = Template.bind({});
PrimaryIdle.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: false,
    isHovered: false,
}

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: true,
    isHovered: false
}

export const PrimaryHovered = Template.bind({});
PrimaryHovered.args = {
    label: 'Button',
    color: 'primary',
    isDisabled: false,
    isHovered: true
}

export const SecondaryIdle = Template.bind({});
SecondaryIdle.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: false,
    isHovered: false,

}
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: true,
    isHovered: false
}
export const SecondaryHovered = Template.bind({});
SecondaryHovered.args = {
    label: 'Button',
    color: 'secondary',
    isDisabled: false,
    isHovered: true
}
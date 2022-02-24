import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pavanputra/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

// Alert button gives alert
export const AlertButton = Template.bind({});
AlertButton.args = {
    children: "click me",
    onClick: () => alert('hello, button is clicked!')
};

// styled button gives below style
export const DeleteButton = Template.bind({});
DeleteButton.args = {
    children: 'delete',
    style: {
        color: 'white',
        backgroundColor: 'crimson',
        border: 'none',
        borderRadius: '4px',
        padding: '4px 20px',
        cursor: 'pointer',
    }
};

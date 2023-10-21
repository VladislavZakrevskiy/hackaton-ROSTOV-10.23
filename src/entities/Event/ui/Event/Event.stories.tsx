import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Event } from './Event';

export default {
    title: 'entities/Event',
    component: Event,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
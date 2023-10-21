import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Comment } from './Comment';

export default {
    title: 'entities/Comment',
    component: Comment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
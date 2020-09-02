import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderSample, HeaderSampleProps } from './HeaderSample';

export default {
  title: 'Example/HeaderSample',
  component: HeaderSample,
} as Meta;

const Template: Story<HeaderSampleProps> = (args) => <HeaderSample {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

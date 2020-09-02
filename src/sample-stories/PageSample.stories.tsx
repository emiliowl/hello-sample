import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PageSample, PageSampleProps } from './PageSample';
import * as HeaderStories from './HeaderSample.stories';

export default {
  title: 'Example/PageSample',
  component: PageSample,
} as Meta;

const Template: Story<PageSampleProps> = (args) => <PageSample {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

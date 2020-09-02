import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonSample, ButtonSampleProps } from './ButtonSample';

export default {
  title: 'Example/ButtonSample',
  component: ButtonSample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonSampleProps> = (args) => <ButtonSample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ButtonSample',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ButtonSample',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ButtonSample',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ButtonSample',
};

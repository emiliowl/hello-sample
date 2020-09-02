import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Hello, { HelloProps } from "./Hello";

export default {
  title: "Example/Hello",
  component: Hello,
  argTypes: {
    text: { control: "text" },
  },
} as Meta;

const Template: Story<HelloProps> = (args) => <Hello {...args} />;

export const HelloDft = Template.bind({});
HelloDft.args = {
  text: "yay, hello dft",
};

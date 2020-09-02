import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Hello, { HelloProps } from "./Hello";

const meta = {
  title: "Example/Hello",
  component: Hello,
  argTypes: {
    text: { control: "text" }
  }
};

export default meta;

const Template :Story<HelloProps> = (args) => <Hello {...args} />;

export const HelloDft = Template.bind({});
HelloDft.args = {
  text: "yay, hello dft",
};

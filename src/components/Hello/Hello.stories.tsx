import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

import { Story, Meta } from "@storybook/react/types-6-0";

import Hello, { HelloProps } from "./Hello";

export default {
  title: "Cox4U/Hello",
  component: Hello,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    actionText: { control: "text" },
    onClick: { action: 'clicked' }
  }
} as Meta;

const Template :Story<HelloProps> = (args :HelloProps) => <Hello {...args} />;

export const HelloDft = Template.bind({});
HelloDft.args = {
  title: "The Title",
  text: "yay, hello dft",
  actionText: "Do Action!"
};

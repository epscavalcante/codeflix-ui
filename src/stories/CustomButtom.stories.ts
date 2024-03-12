import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../components/Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {

    size: { control: 'select', options: ['small', 'normal', 'large', 'extra-large'] },
    intent: { control: 'select', options: ['primary', 'secondary', 'danger', 'text'] },
  },
  args: {
    default: 'TEst'
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    default: 'Intent primary',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    default: 'Intent secondary',
    intent: 'secondary',
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

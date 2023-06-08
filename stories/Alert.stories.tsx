import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
      message:{control: 'text'}
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: "Hello",
    },
};
  
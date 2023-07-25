import type { Meta, StoryObj } from '@storybook/react';
import HangoutHeader from './HangoutHeader';

export default {
  title: 'tab/hangout/HangoutHeader',
  component: HangoutHeader,
} as Meta;

type Story = StoryObj<typeof HangoutHeader>;

export const Primary: Story = {
  args: {
    waitingItemCount: 2,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import HangoutContent from './HangoutContent';

const meta: Meta<typeof HangoutContent> = {
  title: 'tab/hangout/HangoutContent',
  component: HangoutContent,
};

export default meta;

type Story = StoryObj<typeof HangoutContent>;

export const Primary: Story = {};

export const WaitingFiltered: Story = {
  args: {
    onlyWaiting: true,
  },
};

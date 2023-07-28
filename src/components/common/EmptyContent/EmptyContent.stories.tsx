import type { Meta, StoryObj } from '@storybook/react';
import EmptyContent from './EmptyContent';

export default {
  title: 'common/EmptyContent',
  component: EmptyContent,
} as Meta;

type Story = StoryObj<typeof EmptyContent>;

export const Primary: Story = {
  args: {
    type: 'friend',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import InputBar from './InputBar';

export default {
  title: 'common/InputBar',
  component: InputBar,
} as Meta;

type Story = StoryObj<typeof InputBar>;

export const Primary: Story = {
  args: {
    placeholder: 'test',
  },
};

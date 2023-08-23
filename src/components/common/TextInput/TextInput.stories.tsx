import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'common/TextInput',
  component: TextInput,
} as Meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    placeholder: 'test',
  },
};

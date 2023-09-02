import type { Meta, StoryObj } from '@storybook/react';
import MainHeader from './MainHeader';

export default {
  title: 'common/MainHeader',
  component: MainHeader,
} as Meta;

type Story = StoryObj<typeof MainHeader>;

export const Primary: Story = {
  args: {
    title: '친구',
    children: <div>요소</div>,
  },
};

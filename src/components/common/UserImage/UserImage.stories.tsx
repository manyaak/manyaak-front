import type { Meta, StoryObj } from '@storybook/react';
import UserImage from './UserImage';

export default {
  title: 'common/UserImage',
  component: UserImage,
} as Meta;

type Story = StoryObj<typeof UserImage>;

export const Default: Story = {
  args: {
    src: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
    size: 50,
  },
};

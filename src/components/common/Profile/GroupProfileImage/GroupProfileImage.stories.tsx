import type { Meta, StoryObj } from '@storybook/react';
import GroupProfileImage from './GroupProfileImage';

export default {
  title: 'common/Profile/GroupProfileImage',
  component: GroupProfileImage,
} as Meta;

type Story = StoryObj<typeof GroupProfileImage>;

export const TwoMembers: Story = {
  args: {
    src: [
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
    ],
  },
};

export const ThreeMembers: Story = {
  args: {
    src: [
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
    ],
  },
};

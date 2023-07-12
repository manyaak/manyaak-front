import type { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';

export default {
  title: 'common/Profile',
  component: Profile,
} as Meta;

type Story = StoryObj<typeof Profile>;

export const UserProfile: Story = {
  args: {
    type: 'user',
    name: '김만약',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
};

export const UserProfileWithStatusMsg: Story = {
  args: {
    type: 'user',
    name: '김만약',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',

    statusMessage: '저 평일엔 바빠요',
  },
};

export const GroupProfileWith2Members: Story = {
  args: {
    type: 'group',
    name: 'GDSC 만약',
    profileImg: [
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
    ],
  },
};

export const GroupProfileWith3Members: Story = {
  args: {
    type: 'group',
    name: 'GDSC 만약',
    profileImg: [
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
      'https://img.freepik.com/free-icon/user_318-159711.jpg',
    ],
  },
};

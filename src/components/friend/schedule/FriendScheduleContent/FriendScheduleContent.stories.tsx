import type { Meta, StoryObj } from '@storybook/react';
import FriendScheduleContent from './FriendScheduleContent';

export default {
  title: 'tab/friend/schedule/FriendScheduleContent',
  component: FriendScheduleContent,
} as Meta;

type Story = StoryObj<typeof FriendScheduleContent>;

export const Default: Story = {
  args: {
    userProfileInfo: {
      name: 'name',
      statusMessage: 'statusMessage',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
    },
  },
};

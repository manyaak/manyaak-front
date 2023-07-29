import type { Meta, StoryObj } from '@storybook/react';
import FriendContent from './FriendContent';
import { friendDummyData } from '@/dummyData';

const meta: Meta<typeof FriendContent> = {
  title: 'tab/friend/FriendContent',
  component: FriendContent,
};

export default meta;

type Story = StoryObj<typeof FriendContent>;
export const Primary: Story = {
  args: {
    data: friendDummyData,
  },
};

export const WithoutReceivedRequest: Story = {
  args: {
    data: {
      request: [],
      friend: friendDummyData.friend,
      group: friendDummyData.group,
    },
  },
};

export const WithoutFriend: Story = {
  args: {
    data: {
      request: friendDummyData.request,
      friend: [],
      group: friendDummyData.group,
    },
  },
};

export const WithoutGroup: Story = {
  args: {
    data: {
      request: friendDummyData.request,
      friend: friendDummyData.friend,
      group: [],
    },
  },
};

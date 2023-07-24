import type { Meta, StoryObj } from '@storybook/react';
import FriendContent from './FriendContent';

const meta: Meta<typeof FriendContent> = {
  title: 'tab/friend/FriendContent',
  component: FriendContent,
};

export default meta;

const DummyData = {
  request: [
    {
      id: 1,
      name: 'test',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
    {
      id: 2,
      name: 'test',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
  ],
  friend: [
    {
      id: 1,
      name: 'test',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
    {
      id: 2,
      name: 'asdf',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'asdf',
    },
    {
      id: 3,
      name: 'qwer',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'qwer',
    },
  ],
  group: [
    {
      id: 1,
      name: 'test',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
    {
      id: 2,
      name: 'asdf',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
  ],
};

type Story = StoryObj<typeof FriendContent>;
export const Primary: Story = {
  args: {
    data: DummyData,
  },
};

export const WithoutReceivedRequest: Story = {
  args: {
    data: { request: [], friend: DummyData.friend, group: DummyData.group },
  },
};

export const WithoutFriend: Story = {
  args: {
    data: { request: DummyData.request, friend: [], group: DummyData.group },
  },
};

export const WithoutGroup: Story = {
  args: {
    data: { request: DummyData.request, friend: DummyData.friend, group: [] },
  },
};

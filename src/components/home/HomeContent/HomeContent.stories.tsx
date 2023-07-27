import type { Meta, StoryObj } from '@storybook/react';
import HomeContent from './HomeContent';
import { HomeContentDummyData } from '@/dummyData';

const meta: Meta<typeof HomeContent> = {
  title: 'tab/home/HomeContent',
  component: HomeContent,
};

export default meta;

type Story = StoryObj<typeof HomeContent>;

export const Primary: Story = {
  args: {
    data: {
      friendRequestCount: 1,
      hangoutRequestCount: 3,
      favoriteGroup: HomeContentDummyData.favoriteGroup,
    },
  },
};

export const WithoutNotifications: Story = {
  args: {
    data: {
      friendRequestCount: 0,
      hangoutRequestCount: 0,
      favoriteGroup: HomeContentDummyData.favoriteGroup,
    },
  },
};

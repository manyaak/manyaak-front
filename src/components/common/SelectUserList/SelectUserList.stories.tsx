import type { Meta, StoryObj } from '@storybook/react';
import SelectUserList from './SelectUserList';
import { friendDummyData, userDummydata } from '@/dummyData';

export default {
  title: 'common/SelectUserList',
  component: SelectUserList,
} as Meta;

type Story = StoryObj<typeof SelectUserList>;

// export const WithFriend: Story = {
//   args: {
//     type: 'friend',
//     list: userDummydata,
//   },
// };

export const WithGroup: Story = {
  args: {
    type: 'group',
    list: friendDummyData.group,
  },
};

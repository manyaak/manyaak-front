import type { Meta, StoryObj } from '@storybook/react';
import HangoutInfoList from './HangoutInfoList';
import { hangoutsDummydata } from '@/dummyData';

const meta: Meta<typeof HangoutInfoList> = {
  title: 'tab/hangout/HangoutDetailContent/HangoutInfoList',
  component: HangoutInfoList,
};

export default meta;

type Story = StoryObj<typeof HangoutInfoList>;

export const Primary: Story = {
  args: {
    infos: hangoutsDummydata[0],
  },
};

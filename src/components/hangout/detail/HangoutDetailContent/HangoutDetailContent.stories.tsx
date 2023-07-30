import type { Meta, StoryObj } from '@storybook/react';
import HangoutDetailContent from './HangoutDetailContent';
import { hangoutsDummydata } from '@/dummyData';

const meta: Meta<typeof HangoutDetailContent> = {
  title: 'tab/hangout/detail/HangoutDetailContent',
  component: HangoutDetailContent,
};

export default meta;

type Story = StoryObj<typeof HangoutDetailContent>;

export const Primary: Story = {
  args: {
    hangoutInfo: hangoutsDummydata[0],
    footerButtonInfo: [
      { label: '버튼1', onClick: () => {} },
      { label: '버튼2', onClick: () => {} },
    ],
  },
};

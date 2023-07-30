import type { Meta, StoryObj } from '@storybook/react';
import WeeklyScheduleList from './WeeklyScheduleList';

const meta: Meta<typeof WeeklyScheduleList> = {
  title: 'tab/hangout/detail/WeeklyScheduleList',
  component: WeeklyScheduleList,
};

export default meta;

type Story = StoryObj<typeof WeeklyScheduleList>;

export const Primary: Story = {
  args: {
    year: 2023,
    month: 6,
    week: 4,
  },
};

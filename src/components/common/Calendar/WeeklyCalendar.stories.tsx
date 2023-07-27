import type { Meta, StoryObj } from '@storybook/react';
import WeeklyCalendar from './WeeklyCalendar';

const meta: Meta<typeof WeeklyCalendar> = {
  component: WeeklyCalendar,
  args: {},
};

export default meta;
type Story = StoryObj<typeof WeeklyCalendar>;

export const Default: Story = {
  args: {
    month: 6,
    year: 2023,
    week: 4,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import StyledCalendar from './StyledCalendar';

const meta: Meta<typeof StyledCalendar> = {
  component: StyledCalendar,
  args: {},
};

export default meta;
type Story = StoryObj<typeof StyledCalendar>;

export const Default: Story = {
  args: {
    month: 7,
    year: 2023,
  },
};

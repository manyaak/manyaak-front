import type { Meta, StoryObj } from '@storybook/react';
import MontlyCalendar from './MontlyCalendar';

const meta: Meta<typeof MontlyCalendar> = {
  component: MontlyCalendar,
  args: {},
};

export default meta;
type Story = StoryObj<typeof MontlyCalendar>;

export const Default: Story = {
  args: {
    month: 6,
    year: 2023,
  },
};

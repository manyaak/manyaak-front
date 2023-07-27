import type { Meta, StoryObj } from '@storybook/react';
import CalenderHeader from './CalenderHeader';

const meta: Meta<typeof CalenderHeader> = {
  component: CalenderHeader,
  args: {
    month: 6,
    year: 2023,
    goBefore: () => console.log('go back'),
    goNext: () => console.log(' go next'),
  },
};

export default meta;
type Story = StoryObj<typeof CalenderHeader>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import NewHangoutContent from './NewHangoutContent';

const meta: Meta<typeof NewHangoutContent> = {
  title: 'tab/newHangout',
  component: NewHangoutContent,
};

export default meta;

type Story = StoryObj<typeof NewHangoutContent>;

export const Primary: Story = {};

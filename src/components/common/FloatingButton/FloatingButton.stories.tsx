import { Meta, StoryObj } from '@storybook/react';
import FloatingButton from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: 'common/FloatingButton',
  component: FloatingButton,
};

export default meta;

type Story = StoryObj<typeof FloatingButton>;

export const Primary: Story = {};

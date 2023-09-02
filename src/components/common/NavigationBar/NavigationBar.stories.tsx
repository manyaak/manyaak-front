import { Meta, StoryObj } from '@storybook/react';
import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'common/NavigationBar',
  component: NavigationBar,
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Primary: Story = {
  args: {
    focusType: 'HOME',
  },
};

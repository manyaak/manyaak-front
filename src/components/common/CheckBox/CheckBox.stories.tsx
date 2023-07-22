import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'common/CheckBox',
  component: CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {};

import { Meta, StoryObj } from '@storybook/react';
import FooterButton from './FooterButton';

const meta: Meta<typeof FooterButton> = {
  title: 'common/FooterButton',
  component: FooterButton,
};

export default meta;

type Story = StoryObj<typeof FooterButton>;

export const Primary: Story = {};

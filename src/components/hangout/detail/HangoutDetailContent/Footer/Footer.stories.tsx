import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'tab/hangout/HangoutDetailContent/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    buttonInfo: [
      { label: '버튼1', onClick: () => {} },
      { label: '버튼2', onClick: () => {} },
    ],
  },
};

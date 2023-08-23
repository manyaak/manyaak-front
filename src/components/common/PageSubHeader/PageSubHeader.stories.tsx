import type { Meta, StoryObj } from '@storybook/react';
import PageSubHeader from './PageSubHeader';

export default {
  title: 'common/PageSubHeader',
  component: PageSubHeader,
} as Meta;

type Story = StoryObj<typeof PageSubHeader>;

export const Primary: Story = {
  args: {
    title: '그룹 만들기',
  },
};

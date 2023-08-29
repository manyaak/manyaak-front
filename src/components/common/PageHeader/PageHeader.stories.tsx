import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';

export default {
  title: 'common/PageHeader',
  component: PageHeader,
} as Meta;

type Story = StoryObj<typeof PageHeader>;

export const Primary: Story = {
  args: {
    mainTitle: '약속 만들기',
    subTitle: '함께할 친구를 선택해주세요',
  },
};

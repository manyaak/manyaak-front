import { Meta, StoryObj } from '@storybook/react';
import ContentBox from './ContentBox';

const meta: Meta<typeof ContentBox> = {
  title: 'common/ContentBox',
  component: ContentBox,
};

export default meta;

type Story = StoryObj<typeof ContentBox>;

const HeaderChildrenTestComp = <button>여기에 뭐 넣을 수 있게</button>;
const ChildrenTestComp = <h3>Test</h3>;

export const Primary: Story = {
  args: {
    children: ChildrenTestComp,
    headerChildren: HeaderChildrenTestComp,
    title: '테스트',
  },
};

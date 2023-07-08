import type { Meta, StoryObj } from '@storybook/react';
import UserImage from './UserImage';

export default {
  title: 'common/UserImage',
  component: UserImage,
} as Meta;

type Story = StoryObj<typeof UserImage>;

export const Default: Story = {
  args: {
    src: 'https://github-production-user-asset-6210df.s3.amazonaws.com/67703882/251088189-2658d7be-95b8-4481-9390-230a62946c17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230705T083145Z&X-Amz-Expires=300&X-Amz-Signature=b913dd8ba4ffdd84157d1ec6530fc4f94f7f24c3893e3f77d6ba8a04d668bc9d&X-Amz-SignedHeaders=host&actor_id=67703882&key_id=0&repo_id=400976668',
    size: 50,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import HangoutBox from './HangoutBox';

export default {
  title: 'common/HangoutBox',
  component: HangoutBox,
} as Meta;

type Story = StoryObj<typeof HangoutBox>;

export const Default: Story = {
  args: {
    name: 'GDSC 만약 회의',
    date: new Date('2023-07-15'),
    location: '숭실대 정보관 204호',
    members: [
      {
        name: '공소나',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
      {
        name: '공소나2',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
    ],
  },
};

export const HangoutBoxWithShadow: Story = {
  args: {
    name: 'GDSC 만약 회의',
    date: new Date(),
    location: '숭실대 정보관 204호',
    members: [
      {
        name: '공소나',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
      {
        name: '공소나2',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
    ],
    haveBoxShadow: true,
  },
};

export const NotAcceptedHangoutBox: Story = {
  args: {
    name: 'GDSC 만약 회의',
    date: new Date(),
    location: '숭실대 정보관 204호',
    members: [
      {
        name: '공소나',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
      {
        name: '공소나2',
        profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      },
    ],
    isNotAccepted: true,
  },
};

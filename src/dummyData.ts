import { HangoutInfoType } from './components/common/HangoutBox/HangoutBox';

export const userDummydata = [
  {
    id: 1,
    name: '공소나',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    id: 2,
    name: '이강현',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    id: 3,
    name: '고광서',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    id: 4,
    name: '박가현',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    id: 5,
    name: '이정민',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
];

export const hangoutsDummydata: HangoutInfoType[] = [
  {
    name: 'GDSC 만약 회의1',
    date: new Date(),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    name: 'GDSC 만약 회의2',
    date: new Date(),
    location: '숭실대',
    members: userDummydata,
    isAccepted: false,
  },
  {
    name: 'GDSC 만약 회의3',
    date: new Date('2023-07-24 19:00'),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    name: 'GDSC 만약 회의3',
    date: new Date('2023-07-24'),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    name: '공소나 생일 파티',
    date: new Date('2023-09-25'),
    location: '일산',
    members: userDummydata.slice(0, 1),
    isAccepted: true,
  },
  {
    name: '공소나 생일 파티',
    date: new Date('2023-09-25'),
    location: '일산',
    members: userDummydata.slice(0, 1),
    isAccepted: false,
  },
  {
    name: '공소나 생일 파티',
    date: new Date('2023-09-25'),
    location: '일산',
    members: userDummydata.slice(0, 1),
    isAccepted: true,
  },
];

export const HomeContentDummyData = {
  friendRequestCount: 1,
  hangoutRequestCount: 5,

  favoriteGroup: [
    {
      id: 1,
      name: 'GDSC 그룹1',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
    {
      id: 2,
      name: 'GDSC 그룹2',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
    {
      id: 3,
      name: 'GDSC 그룹3',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
  ],
};

export const friendDummyData = {
  request: [
    {
      id: 1,
      name: '이강현',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
    {
      id: 2,
      name: '고광서',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
  ],
  friend: [
    {
      id: 1,
      name: '공소나',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'test',
    },
    {
      id: 2,
      name: '이정민',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'asdf',
    },
    {
      id: 3,
      name: '박가현',
      profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      statusMessage: 'qwer',
    },
  ],
  group: [
    {
      id: 1,
      name: '사실 그룹',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
    {
      id: 2,
      name: '만약 그룹',
      profileImg: [
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
        'https://img.freepik.com/free-icon/user_318-159711.jpg',
      ],
    },
  ],
};

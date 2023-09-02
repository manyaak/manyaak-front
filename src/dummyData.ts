import { HangoutInfoType } from './types/hangout';
import { ScheduleInfoType } from './types/schedule';

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
    id: 1,
    name: 'GDSC 만약 회의1',
    date: new Date(),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    id: 2,
    name: 'GDSC 만약 회의2',
    date: new Date(),
    location: '숭실대',
    members: userDummydata,
    isAccepted: false,
  },
  {
    id: 3,
    name: 'GDSC 만약 회의3',
    date: new Date('2023-07-24 19:00'),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    id: 4,
    name: 'GDSC 만약 회의3',
    date: new Date('2023-07-24'),
    location: '숭실대',
    members: userDummydata,
    isAccepted: true,
  },
  {
    id: 5,
    name: '공소나 생일 파티',
    date: new Date('2023-09-25'),
    location: '일산',
    members: userDummydata.slice(0, 1),
    isAccepted: true,
  },
  {
    id: 6,
    name: '공소나 생일 파티',
    date: new Date('2023-09-25'),
    location: '일산',
    members: userDummydata.slice(0, 1),
    isAccepted: false,
  },
  {
    id: 7,
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

export const ScheduleDummyData: ScheduleInfoType[] = [
  {
    scheduleId: 3,
    scheduleDate: '2023-08-01T10:44:39.369+00:00',
    time: '오후 3시',
    info: '솔챌 식사',
    detailAddress: '서울특별시 동작구 상도동 사당로 50',
    lng: 126.960957,
    lat: 37.492414,
    friendList: [
      {
        id: 2,
        statusMessage: null,
        img: '1',
        name: '일인자',
      },
      {
        id: 3,
        statusMessage: null,
        img: '2',
        name: '이인자',
      },
      {
        id: 1,
        statusMessage: null,
        img: 'http://k.kakaocdn.net/dn/bFe99u/btsmd0qfsWk/vLkfmNU6qbO06IDDLxFKkk/img_640x640.jpg',
        name: '박가현',
      },
      {
        id: 5,
        statusMessage: null,
        img: 'http://k.kakaocdn.net/dn/cyE47l/btsoEpQApLy/SH9WMN9GuJUYHwX1FlRLsK/img_640x640.jpg',
        name: '이정민',
      },
    ],
  },
  {
    scheduleId: 4,
    scheduleDate: '2023-08-02T10:44:39.369+00:00',
    time: '오후 4시',
    info: '솔챌 식사2',
    detailAddress: '서울특별시 동작구 상도동 사당로 50',
    lng: 126.960957,
    lat: 37.492414,
    friendList: [],
  },
];

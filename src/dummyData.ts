import { HangoutInfoType } from './components/common/HangoutBox/HangoutBox';

export const userDummydata = [
  {
    name: '공소나',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    name: '이강현',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    name: '고광서',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
    name: '박가현',
    profileImg: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
  },
  {
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

import { MainLayout, SubLayout } from './pages/layout';
import Hangouts from './pages/hangout';
import HangoutRequestTab from './pages/hangout/hangoutRequest';
import HangoutDetailTab from './pages/hangout/hangoutDetail';
import HomeTab from './pages/home';
import FriendTab from './pages/friend';
import NewHangoutTab from './pages/hangout/newHangout';
import FriendScheduleContentTab from './pages/friend/friendDetail';
import NewFriendTab from './pages/friend/newFriend';
import NewGroupTab from './pages/friend/newGroup';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeTab />,
      },
      {
        path: 'hangout',
        element: <Hangouts />,
      },
      {
        path: 'friend',
        element: <FriendTab />,
      },
      {
        path: 'mypage',
        element: <div>MyPage Tab!</div>,
      },
    ],
  },
  {
    path: '/',
    element: <SubLayout />,
    children: [
      {
        path: 'hangout/:hid',
        element: <HangoutDetailTab />,
      },
      {
        path: 'hangout/:hid/request',
        element: <HangoutRequestTab />,
      },
      {
        path: 'friend/:hid',
        element: <FriendScheduleContentTab />,
      },
      {
        path: 'hangout/new',
        element: <NewHangoutTab />,
      },
      {
        path: 'friend/new',
        element: <NewFriendTab />,
      },
      {
        path: 'group/new',
        element: <NewGroupTab />,
      },
    ],
  },
];

export default routes;

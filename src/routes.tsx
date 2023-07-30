import { MainLayout, SubLayout } from './pages/layout';
import Hangouts from './pages/hangout';
import HangoutRequestTab from './pages/hangout/hangoutRequest';
import HangoutDetailTab from './pages/hangout/hangoutDetail';
import HomeTab from './pages/home';
import FriendTab from './pages/friend';
import FriendScheduleContentTab from './pages/friend/schedule';

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
        path: 'hangout/request/:hid',
        element: <HangoutRequestTab />,
      },
      {
        path: 'friend/schedule/:hid',
        element: <FriendScheduleContentTab />,
      },
    ],
  },
];

export default routes;

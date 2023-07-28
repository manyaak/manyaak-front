import BasicLayout from './pages/layout';
import Hangouts from './pages/hangout';
import HomeTab from './pages/home';
import FriendTab from './pages/friend';

const routes = [
  {
    path: '/',
    element: <BasicLayout />,
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
        path: 'hangout/:hid',
        element: <>hangout item</>,
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
];

export default routes;

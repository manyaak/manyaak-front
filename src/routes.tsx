import BasicLayout from './pages/layout';
import Hangouts from './pages/hangout';

const routes = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <div>Home Tab!</div>,
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
        element: <div>Friends Tab!</div>,
      },
      {
        path: 'mypage',
        element: <div>MyPage Tab!</div>,
      },
    ],
  },
];

export default routes;

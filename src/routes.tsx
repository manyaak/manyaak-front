import Test from '@/pages/test';

const routes = [
  {
    path: '/',
    element: <div>main page</div>,
  },
  {
    path: 'test',
    element: <Test text="test page" />,
  },
];

export default routes;

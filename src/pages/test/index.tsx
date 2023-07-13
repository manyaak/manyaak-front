import { api_getPost } from '@/apis/test';
import useApiQuery from '@/hooks/useApiQuery';

const TestPage = () => {
  const { data } = useApiQuery(api_getPost, { pathParams: [3] });

  return (
    <div>
      <p>{data?.id}</p>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
      <p>{data?.userId}</p>
    </div>
  );
};

export default TestPage;

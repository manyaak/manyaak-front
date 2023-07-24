import { api_getPost, api_updatePost } from '@/apis/test';
import useApiMutation from '@/hooks/useApiMutation';
import useApiQuery from '@/hooks/useApiQuery';

const TestPage = () => {
  const { data } = useApiQuery(api_getPost, { pathParams: [5] });
  const mutation = useApiMutation(api_updatePost);

  return (
    <div>
      <p>{data?.id}</p>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
      <p>{data?.userId}</p>
      <button
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-alert
          const title = prompt('제목을 입력해주세요') ?? '';
          // eslint-disable-next-line no-alert
          const body = prompt('내용을 입력해주세요') ?? '';
          mutation.mutate({
            pathParams: [5],
            body: {
              id: 5,
              title,
              body,
              userId: data?.userId ?? 12,
            },
          });
        }}
      >
        modify post
      </button>
    </div>
  );
};

export default TestPage;

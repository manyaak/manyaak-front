import { useLogout } from '@/hooks/useAuth';

const MyPage = () => {
  const logout = useLogout();

  return (
    <button
      type="button"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
};

export default MyPage;

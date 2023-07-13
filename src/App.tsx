import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { broadcastQueryClient } from '@tanstack/query-broadcast-client-experimental';
import { StrictMode } from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import routes from './routes';
import './assets/styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // mount 시 API 재요청 방지 (https://github.com/TanStack/query/issues/2142#issuecomment-1422451699)
      staleTime: Infinity,
      // https://tanstack.com/query/v4/docs/react/plugins/persistQueryClient#how-it-works
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

// https://github.com/TanStack/query/issues/2142#issuecomment-1422451699
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

broadcastQueryClient({
  queryClient,
  broadcastChannel: 'manyaak-web',
});

function App() {
  const router = createBrowserRouter(routes);

  return (
    <StrictMode>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <RouterProvider router={router} />
      </PersistQueryClientProvider>
    </StrictMode>
  );
}

export default App;

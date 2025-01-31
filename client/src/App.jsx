import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./components/Routes/AppRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      // staleTime: 30000, 
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      
    },
    mutations: {
      //...
    }
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;

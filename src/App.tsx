import { useEffect } from "react";
import Layout from "./layout/Layout";
import Reports from "./pages/Reports";
import { useUserStore } from "./store";

function App() {
  const fetchUser = useUserStore((state) => state.fetch);
  const fetchUserError = useUserStore((state) => state.error);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (fetchUserError !== null) {
      throw new Error(fetchUserError);
    }
  }, [fetchUserError]);

  return (
    <Layout>
      <Reports />
    </Layout>
  );
}

export default App;

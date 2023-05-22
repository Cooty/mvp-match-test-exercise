import { useEffect } from "react";
import Layout from "./layout/Layout";
import Reports from "./pages/Reports";
import { userUserStore } from "./store";

function App() {
  const fetchUser = userUserStore((state) => state.fetch);
  const fetchUserError = userUserStore((state) => state.error);
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

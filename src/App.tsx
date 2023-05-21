import { useEffect } from "react";
import Layout from "./layout/Layout";
import Reports from "./pages/Reports";
import { userUserStore } from "./store";

function App() {
  const fetchUsers = userUserStore((state) => state.fetch);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Layout>
      <Reports />
    </Layout>
  );
}

export default App;

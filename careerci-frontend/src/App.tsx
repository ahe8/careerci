import Layout from "./components/Layout";

import { useAuth } from "./app/hooks";

const App = () => {
  useAuth();

  return (
    <>
      <Layout />
    </>
  );
};

export default App;

import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routers from "./constants/Routers";
import { useRoutes } from "react-router-dom";

const AppRouter = () => useRoutes(Routers);

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  </>
);
export default App;

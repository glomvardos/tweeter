import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PublicRoutes from "./components/Routes/PublicRoutes";
import { routes } from "./constants/routes";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Layout from "./containers/Layout";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.explore} element={<div>Explore</div>} />
            <Route path={routes.bookmarks} element={<div>Bookmarks</div>} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss={false}
        transition={Slide}
      />
    </QueryClientProvider>
  );
};

export default App;

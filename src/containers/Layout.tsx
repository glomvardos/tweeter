import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useQuery } from "react-query";
import { getAuthUser } from "../store/auth/auth.actions";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useQuery("user", () => dispatch(getAuthUser()), {
    enabled: !!token,
  });

  return (
    <main className="flex flex-col">
      <Navigation />
      <Outlet />
    </main>
  );
};

export default Layout;

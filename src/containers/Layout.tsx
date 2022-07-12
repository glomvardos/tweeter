import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useQuery } from "react-query";
import { getAuthUser } from "../store/auth/auth.actions";
import Header from "../components/Header/Header";

const Layout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useQuery("user", () => dispatch(getAuthUser()), {
    enabled: !!token,
  });

  return (
    <main className="flex flex-col h-full bg-[#F2F2F2]">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;

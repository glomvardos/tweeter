import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import apiService from "../services/api/apiService";
import useGetData from "../hooks/useGetData";

const Layout = () => {
  useGetData({ queryKey: "user", queryFn: apiService.getAuthUser });

  return (
    <main className="flex flex-col h-full bg-[#F2F2F2]">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;

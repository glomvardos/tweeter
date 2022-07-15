import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import apiService from "../services/api/apiService";
import useGetData from "../hooks/useGetData";
import ContentContainer from "../components/UI/ContentContainer";

const Layout = () => {
  useGetData({ queryKey: "user", queryFn: apiService.getAuthUser });

  return (
    <main className="flex flex-col h-full bg-[#F2F2F2]">
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </main>
  );
};

export default Layout;

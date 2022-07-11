import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { routes } from "../../constants/routes";

const PublicRoutes = () => {
  const token = useAppSelector((state) => state.auth.token);
  return !token ? <Outlet /> : <Navigate to={routes.home} />;
};

export default PublicRoutes;

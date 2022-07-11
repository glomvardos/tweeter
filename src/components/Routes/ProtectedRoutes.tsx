import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { routes } from "../../constants/routes";

const ProtectedRoutes = () => {
  const token = useAppSelector((state) => state.auth.token);
  return token ? <Outlet /> : <Navigate to={routes.login} />;
};

export default ProtectedRoutes;

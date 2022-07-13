import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../../constants/routes";
import tokenMethods from "../../utils/token/tokenMethods";

const ProtectedRoutes = () => {
  const token = tokenMethods.getAccessToken();

  return token ? <Outlet /> : <Navigate to={routes.login} />;
};

export default ProtectedRoutes;

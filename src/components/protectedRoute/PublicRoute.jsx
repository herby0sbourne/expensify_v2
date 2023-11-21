import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const user = useSelector(selectUser);

  // if (!user?.uid) return <Outlet />;
  //
  // return <Navigate to="/" />;

  return user?.uid ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoute;

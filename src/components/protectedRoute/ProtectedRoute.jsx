import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector(selectUser);

  return user?.uid ? <Outlet /> : <Navigate to="/login" />;
  // return user?.uid ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;

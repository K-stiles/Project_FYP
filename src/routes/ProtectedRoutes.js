import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GET_USER } from "../redux/features/userSlice";

export default function ProtectedRoutes() {
   const location = useLocation();
   const user = useSelector(GET_USER);

   return (
      <>
         {user?.user ? (
            <Outlet />
         ) : (
            <Navigate to="/login" replace state={{ from: location }} />
         )}
      </>
   );
}

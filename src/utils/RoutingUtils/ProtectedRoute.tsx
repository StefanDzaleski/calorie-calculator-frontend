import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  roles: string[];
  children: React.ReactNode;
}

function ProtectedRoute({ roles, children }: Props) {
  const loggedIn = useSelector((state: any) => state.user.accessToken);
  const location = useLocation();

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // To be updated for the appropriate roles
  // if (!roles.includes(userRole)) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
}

export default ProtectedRoute;

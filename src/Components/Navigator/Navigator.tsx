import "./Navigator.css";

import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../utils/RoutingUtils/routes";
import { useDispatch } from "react-redux";
import { logOut } from "../../userSlice";
import { axiosInstance } from "../../axiosInstance";

interface Props {
  index: number;
}

function Navigator({ index }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigatorRoutes = routes[index].children[0].children;

  function eraseRefreshToken() {
    axiosInstance
      .post("auth/logout")
      .then(function (response) {
        console.log("Logout response: ", response);
        dispatch(logOut());
        navigate("/login");
      })
      .catch(function (error) {
        console.log("Logout error: ", error);
      });
  }

  return (
    <>
      <div className="navigator">
        {navigatorRoutes.map((route: any, index: number) => {
          if (route.path) {
            return (
              <Link key={`${route.path}${index}`} to={route.path}>
                {route.title}
              </Link>
            );
          }
          return null;
        })}
        <button type="button" onClick={eraseRefreshToken}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Navigator;

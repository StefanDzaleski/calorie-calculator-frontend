import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const accessToken = useSelector((state: any) => state.user.accessToken);
  const persist = !!localStorage.getItem("persist");

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log("Persist login error: ", err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    if (!accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [accessToken, refresh]);

  return !persist ? <Outlet /> : isLoading ? <div>Loading...</div> : <Outlet />;
}

export default PersistLogin;

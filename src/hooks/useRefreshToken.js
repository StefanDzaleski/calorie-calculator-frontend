import { useDispatch } from "react-redux";
import { axiosInstance } from "../axiosInstance";
import { saveAccessToken } from "../userSlice";
import { useNavigate, useLocation } from "react-router-dom";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // handle expired refresh token here
  const refresh = async () => {
    try {
      const response = await axiosInstance.get("auth/refresh-token");
      console.log("Getting new refresh token");
      dispatch(saveAccessToken(response.data.accessToken));

      return response.data.accessToken;
    } catch (error) {
      localStorage.removeItem("persist");
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
  };

  return refresh;
};

export default useRefreshToken;

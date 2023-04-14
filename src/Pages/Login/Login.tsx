import { Form, Formik } from "formik";
import TextInput from "../../FormItems/TextInput/TextInput";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [persist, setPersist] = useState(!!localStorage.getItem("persist"));

  const from = location.state?.from?.pathname || "/new-ingredient";

  useEffect(() => {
    axiosInstance
      .get("/")
      .then(function (response) {
        console.log("Response: ", response);
      })
      .catch(function (error) {});
  }, []);

  function handlePersist() {
    const oldPersist = persist;
    if (oldPersist) {
      localStorage.removeItem("persist");
    } else {
      localStorage.setItem("persist", "true");
    }
    setPersist((prevValue) => !prevValue);
    // Local storage update can be handled in a useEffect as well
  }

  function authenticateUser(values: any, helpers: any) {
    axiosInstance
      .post("auth/authenticate-user", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        console.log("Login response: ", response);
        dispatch(logIn(response.data.accessToken));
        navigate(from, { replace: true });
      })
      .catch(function (error) {
        console.log("Login error: ", error);
      });
  }

  return (
    <div className="content">
      <Formik
        onSubmit={authenticateUser}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {() => (
          <Form>
            <TextInput name={`username`} />
            <TextInput name={`password`} />
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <div>
        <input
          type="checkbox"
          id="persist"
          onChange={handlePersist}
          checked={persist}
        />
        <label htmlFor="persist">Remember me</label>
      </div>
    </div>
  );
}

export default Login;

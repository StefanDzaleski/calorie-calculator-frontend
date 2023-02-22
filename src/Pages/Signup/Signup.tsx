import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import TextInput from "../../FormItems/TextInput/TextInput";
import { SignupSchema } from "../../utils/ValidationSchemas/SignupSchema";

function Signup() {
  function createUser(values: any, helpers: any) {
    axiosInstance
      .post("auth/create-user", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        console.log("Create user response: ", response);
        helpers.resetForm({
          values: {
            username: "",
            password: "",
            repeatPassword: "",
          },
        });
      })
      .catch(function (error) {
        console.log("Create user error: ", error);
      });
  }

  return (
    <div className="content">
      <Formik
        onSubmit={createUser}
        initialValues={{
          username: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form>
            <TextInput name={`username`} />
            <TextInput name={`password`} type="password" />
            <TextInput name={`repeatPassword`} type="password" />
            <button type="submit">Sign up</button>
            <div>
              {errors.username || errors.password || errors.repeatPassword}
            </div>
          </Form>
        )}
      </Formik>
      <div>
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Signup;

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useAuthContext } from "../context/Auth/AuthContext";
import { Main } from "../layouts/Main";
import { initialValues, authSchema } from "../validations/authSchema";
import "./auth.css";

export function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuthContext();

  const handleSubmitSignup = (values, actions) => {
    signup(values.email, values.password);
    navigate("/");
  };

  return (
    <Main>
      <Formik
        initialValues={initialValues}
        validationSchema={authSchema}
        onSubmit={handleSubmitSignup}
      >
        {(props) => {
          return (
            <Form onSubmit={props.handleSubmit} className="main-signin-form">
              <h2>REGISTER</h2>
              <label>Email</label>
              <Field name="email" />
              <label>Password</label>
              <Field name="password" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </Main>
  );
}

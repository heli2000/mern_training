import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import { Navigate, useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [state] = useContext(UserLoginContext);
  const navigate = useNavigate();

  if (state.user._id !== null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="container-login100 bgimg">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
          <Formik
            initialValues={{ name: "", pass: "", cpass: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("User name field is required !"),
              pass: Yup.string().required("Password field is required !"),
              cpass: Yup.string().when("pass", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("pass")],
                  "Both password need to be the same"
                ),
              }),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const fetch = await axios.post(
                  `${process.env.REACT_APP_API_URL}register`,
                  JSON.stringify({ ...values }),
                  {
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*",
                    },
                  }
                );
                const data = await fetch.data;
                Swal.fire("", data.message, "success");
                navigate("/");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form className="login100-form validate-form">
                  <span className="login100-form-title p-b-37">Sign Up</span>
                  <div
                    className="wrap-input100 validate-input m-b-20"
                    data-validate="Enter username or email"
                  >
                    <Field
                      className="input100"
                      type="text"
                      name="name"
                      placeholder="username or email"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span className="focus-input100" />
                  </div>
                  <span className="error">
                    <ErrorMessage name="name" />
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-25"
                    data-validate="Enter password"
                  >
                    <Field
                      className="input100"
                      type="password"
                      name="pass"
                      placeholder="password"
                      value={values.pass}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span className="focus-input100" />
                  </div>
                  <span className="error">
                    <ErrorMessage name="pass" />
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-25"
                    data-validate="Enter password"
                  >
                    <Field
                      className="input100"
                      type="password"
                      name="cpass"
                      placeholder="conform password"
                      value={values.cpass}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span className="focus-input100" />
                  </div>
                  <span className="error">
                    <ErrorMessage name="cpass" />
                  </span>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" type="submit">
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center">
                    <Link to="/login" className="txt2 hov1">
                      Sign In
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

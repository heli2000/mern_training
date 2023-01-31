import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [state, dispatch] = useContext(UserLoginContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-login100 bgimg">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
          <Formik
            initialValues={{ name: "", pass: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("User name field is required !"),
              pass: Yup.string().required("Password field is required !"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const fetch = await axios.post(
                  `${process.env.REACT_APP_API_URL}login`,
                  JSON.stringify({ ...values }),
                  {
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*",
                    },
                  }
                );
                const data = await fetch.data;

                if (Object.keys(data).length > 1) {
                  dispatch({
                    type: "updateUserLoginInfo",
                    payload: { user: { ...data.userData[0] } },
                  });
                } else {
                  Swal.fire("", data.message, "error");
                }
                navigate("/");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <Form className="login100-form validate-form">
              <span className="login100-form-title p-b-37">Sign In</span>
              <div
                className="wrap-input100 validate-input m-b-20"
                data-validate="Enter username or email"
              >
                <Field
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="username or email"
                />
                <span className="focus-input100" />
                {/* <span>
                  <ErrorMessage name="name" />
                </span> */}
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
                />
                <span className="focus-input100" />
                {/* <span>
                  <ErrorMessage name="pass" />
                </span> */}
              </div>
              <span className="error">
                <ErrorMessage name="pass" />
              </span>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Sign In
                </button>
              </div>
              <div className="text-center">
                <Link to="/register" className="txt2 hov1">
                  Sign Up
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

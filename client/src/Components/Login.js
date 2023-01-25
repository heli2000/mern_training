import React, { } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export const Login = () => {

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
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
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
              <input
                autoComplete="off"
                data-drupal-selector="form-traeaa2cgha0bh7tnsx3iaz1brtb6zuzyp9-kimijom"
                type="hidden"
                name="form_build_id"
                defaultValue="form-traEaA2CGHA0bH7tNsx3iaz1BRtb6zUzYp9-kImiJoM"
              />
              <input
                data-drupal-selector="edit-user-login-form"
                type="hidden"
                name="form_id"
                defaultValue="user_login_form"
              />
              <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">Sign In</button>
            </div>
            <div className="text-center">
              <a href="/" className="txt2 hov1">
                Sign Up
              </a>
            </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

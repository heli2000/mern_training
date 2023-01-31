import React from "react";
import "../../../CSS/Footer.css";
import MernImg from "../../../Images/mern.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const Footer = () => {
  return (
    <footer>
      <div class="f-item-con">
        <div class="app-info">
          <img src={MernImg} className="menu-img" />
        </div>
        <div class="g-i-t">
          <div class="footer-title">Get in Touch</div>

          <Formik
            initialValues={{ email: "", message: "" }}
            validationSchema={Yup.object({
              email: Yup.string().required("email field is required !"),
              message: Yup.string().required("message field is required !"),
            })}
            onSubmit={async (values, { resetForm }) => {
              resetForm({values: ''})
              Swal.fire(
                '',
                'submitted successfully',
                'success'
              )
              console.log(values);
            }}
          >
            <Form className="login100-form validate-form">
              <div
                className="wrap-input100 validate-input m-b-20"
                data-validate="Enter username or email"
              >
                <Field
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="email"
                />
                <span className="focus-input100" />
              </div>
              <span class="error">
                <ErrorMessage name="email" />
              </span>
              <div
                className="wrap-input100 validate-input m-b-25"
                data-validate="Enter password"
              >
                <Field
                  className="input100"
                  type="textarea"
                  name="message"
                  placeholder="message"
                />
                <span className="focus-input100" />
              </div>
              <span class="error">
                <ErrorMessage name="message" />
              </span>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div class="cr-con">Copyright &copy; 2023 | Made by Covrize</div>
    </footer>
  );
};

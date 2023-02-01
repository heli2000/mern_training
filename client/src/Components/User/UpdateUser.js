import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import axios from "axios";

export const UpdateUser = (props) => {

  return (
    <>
      {props.editUserInfo !== null && (
        <Formik
          initialValues={{ name: props.editUserInfo.name, id: props.editUserInfo._id }}
          validationSchema={Yup.object({
            name: Yup.string().required("User name field is required !"),
          })}
          onSubmit={async (values) => {
            try {
              const fetch = await axios.post(
                `${process.env.REACT_APP_API_URL}editUser`,
                JSON.stringify({ ...values }),
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                }
              );
              const data = await fetch.data;
              props.setShow(false);
              if (data.message) {
                Swal.fire("", data.message, "success");
              } else {
                Swal.fire("", data.error, "error");
              }
            } catch (e) {
              console.log(e);
            }
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
                name="name"
                placeholder="username or email"
              />
              <span className="focus-input100" />
            </div>
            <span className="error">
              <ErrorMessage name="name" />
            </span>
            <div className="container-login100-form-btn btn-margin">
              <Button className="login100-form-btn" type="submit">
                Save
              </Button>
              <Button
                className="login100-form-btn"
                type="button"
                variant="success"
                onClick={() => props.setShow(false)}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

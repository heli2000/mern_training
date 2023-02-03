import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export const DeleteUser = (props) => {
  const deleteUser = async () => {
    const fetch = axios.post(
      `${process.env.REACT_APP_API_URL}deleteUser`,
      JSON.stringify({ id: props.id }),
      {
        withCredentials: true,
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
  };

  return (
    <>
      Are you sure to delete this user ??
      <div className="container-login100-form-btn btn-margin">
        <Button
          className="login100-form-btn"
          type="button"
          variant="danger"
          onClick={deleteUser}
        >
          Yes
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
    </>
  );
};

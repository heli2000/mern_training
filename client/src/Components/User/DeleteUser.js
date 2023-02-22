import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import UserService from "../../Services/UserService";

export const DeleteUser = (props) => {
  const deleteUser = async () => {
    const fetch = await UserService.deleteUser(props.id);
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

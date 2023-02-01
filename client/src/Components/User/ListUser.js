import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import { BootstrapModal } from "../Modal/BootstrapModal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const ListUser = () => {
  const [state] = useContext(UserLoginContext);
  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [show]);

  const editUser = async (id, e) => {
    setShow(!show);
    // console.log(userList.filter((e) => e._id == id)[0].name);
    setEditUserInfo(userList.filter((e) => e._id == id)[0]);
  };

  const userColumn = [
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Operation",
      cell: (row) => (
        <Button id={row._id} onClick={editUser.bind(this, row._id)}>
          Edit
        </Button>
      ),
    },
  ];

  const fetchUsers = async () => {
    const fetch = await axios.get(
      `${process.env.REACT_APP_API_URL}listUser?id=${state.user._id}`
    );
    const data = await fetch.data.UserData;
    setUserList(data);
  };

  if (!state.user.isAdmin) {
    return <div>Access Denied !!</div>;
  }

  return (
    <div className="user-list-data">
      <DataTable
        columns={userColumn}
        data={userList}
        pagination={true}
        title="User List"
      />
      <BootstrapModal
        show={show}
        showfalse={(s) => setShow(s)}
        title="Edit User"
      >
        {editUserInfo !== null && (
          <Formik
            initialValues={{ name: editUserInfo.name, id: editUserInfo._id }}
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
                console.log(data);
                setShow(!show);
                if(data.message){
                    Swal.fire(
                        '',
                        data.message,
                        'success'
                    );
                }else{
                    Swal.fire(
                        '',
                        data.error,
                        'error'
                    )
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
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Save
                </button>
              </div>
            </Form>
          </Formik>
        )}
      </BootstrapModal>
    </div>
  );
};

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import { BootstrapModal } from "../Modal/BootstrapModal";
import { UpdateUser } from "./UpdateUser";
import { DeleteUser } from "./DeleteUser";

export const ListUser = () => {
  const [state] = useContext(UserLoginContext);
  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetch = await axios.get(
        `${process.env.REACT_APP_API_URL}listUser?id=${state.user._id}`,
        {
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json'
          }
      }
      );
      const data = await fetch.data.UserData;
      setUserList(data);
    };
    fetchUsers();
  }, [show, state.user._id, deleteShow]);

  const editUser = async (id, e) => {
    setShow(!show);
    setEditUserInfo(userList.filter((e) => e._id === id)[0]);
  };

  const deleteUser = async (id, e) => {
    setDeleteShow(!deleteShow);
    setEditUserInfo(id);
  };

  const userColumn = [
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Operation",
      cell: (row) => (
        <div className="list-user-op">
          <Button id={row._id} onClick={editUser.bind(this, row._id)}>
            Edit
          </Button>
          <Button
            id={row._id}
            onClick={deleteUser.bind(this, row._id)}
            variant="danger"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

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
        <UpdateUser editUserInfo={editUserInfo} setShow={(s) => setShow(s)} />
      </BootstrapModal>
      <BootstrapModal
        show={deleteShow}
        showfalse={(s) => setDeleteShow(s)}
        title="Delete User"
      >
        <DeleteUser id={editUserInfo} setShow={(s) => setDeleteShow(s)} />
      </BootstrapModal>
    </div>
  );
};

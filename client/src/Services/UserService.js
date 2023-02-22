import axios from "axios";

const loginUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}login`,
    JSON.stringify({ ...values }),
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const deleteUser = async (id) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}deleteUser`,
    JSON.stringify({ id: id }),
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const listUser = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}listUser?id=${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const logoutUser = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}logout`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const registerUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}register`,
    JSON.stringify({ ...values }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const updateUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}editUser`,
    JSON.stringify({ ...values }),
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const UserService = {
  loginUser,
  deleteUser,
  listUser,
  logoutUser,
  registerUser,
  updateUser
};

export default UserService;

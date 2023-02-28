import axios from "axios";

const header = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const loginUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}login`,
    JSON.stringify({ ...values }),
    {
      withCredentials: true,
      ...header
    }
  );
};

const deleteUser = async (id) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}deleteUser`,
    JSON.stringify({ id: id }),
    {
      withCredentials: true,
      ...header
    }
  );
};

const listUser = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}listUser?id=${id}`, {
    withCredentials: true,
    ...header
  });
};

const logoutUser = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}logout`, {
    withCredentials: true,
    ...header
  });
};

const registerUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}register`,
    JSON.stringify({ ...values }),
    {
      ...header
    }
  );
};

const updateUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}editUser`,
    JSON.stringify({ ...values }),
    {
      withCredentials: true,
      ...header
    }
  );
};

const UserService = {
  loginUser,
  deleteUser,
  listUser,
  logoutUser,
  registerUser,
  updateUser,
};

export default UserService;

import axios from "axios";

export const loginUser = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}login`,
    JSON.stringify({ ...values }),
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
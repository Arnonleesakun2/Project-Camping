import axios from "axios";

export const uploadImage = async (token, data) => {
  return await axios.post(
    "http://localhost:5000/api/images",
    { image: data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

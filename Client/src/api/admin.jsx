import axios from "axios";

export const listStat = async (token) => {
  return await axios.get("http://localhost:5000/api/stats", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
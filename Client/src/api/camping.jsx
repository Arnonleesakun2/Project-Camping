import axios from "axios";

export const createCamping = async (token, data) => {
  return await axios.post("http://localhost:5000/api/createcamping", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const listCamping = async (id) => {
  return await axios.get(`http://localhost:5000/api/campings/${id}`);
};

export const listCampingUser = async (token, id) => {
  return await axios.get(`http://localhost:5000/api/campinguser/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const readCamping = async (id) => {
  return await axios.get(`http://localhost:5000/api/camping/${id}`);
};

export const deleteCamping = async (token, id) => {
  return await axios.delete(`http://localhost:5000/api/deletecamping`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { id },
  });
};

export const addOrRemoveFavorite = async (token, data) => {
  return await axios.post("http://localhost:5000/api/favorite", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const filterCamping = async (category, search) => {
  return await axios.get(
    `http://localhost:5000/api/filter-camping?category=${category}&search=${search}`
  );
};

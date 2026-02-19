import axios from "axios";

const BASE_URL = "http://localhost:5000/api/flex";

export const getAllFlexData = async () => {
  const res = await axios.get(`${BASE_URL}/all`);
  return res.data;
};

export const getLatestFlex = async () => {
  const res = await axios.get(`${BASE_URL}/latest`);
  return res.data;
};

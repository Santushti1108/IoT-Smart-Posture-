import axios from "axios";

const BASE_URL = "http://https://iot-smart-posture-backend.onrender.com/api/flex";

export const getAllFlexData = async () => {
  const res = await axios.get(`${BASE_URL}/all`);
  return res.data;
};

export const getLatestFlex = async () => {
  const res = await axios.get(`${BASE_URL}/latest`);
  return res.data;
};

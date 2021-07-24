// Web Call Import
import axios from "axios";

// Local URL
const base_chalice_url = "http://localhost:8000"
//const base_chalice_url = process.env.CHALICE_DEPLOY_URL;

export const login = async (user_data) => {
  return await axios.post(base_chalice_url + "/login", user_data);
};

export const create_user = async (user_data) => {
  console.log(user_data);
  return await axios.post(base_chalice_url + "/create_user", user_data);
}
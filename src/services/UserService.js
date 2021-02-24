import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:5000/api/";

const getUserInfo = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

export default {
    getUserInfo
};
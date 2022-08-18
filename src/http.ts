import axios from "axios";
import { loginType } from "./Domain/loginType";
import { signupType } from "./Domain/signupType";

axios.defaults.baseURL = "http://localhost:5000";

export const signUp = async (userInfo: signupType) => {
  try {
    const res = await axios.post("/signup", userInfo);
    return res;
  } catch (err) {
    console.log(err);
  }
};

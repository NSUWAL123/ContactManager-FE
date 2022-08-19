import axios from "axios";
import { loginType } from "./interface/loginType";
import { signupType } from "./interface/signupType";
import {
  getTokenFromLocalStorage,
  setUserToLocalStorage,
} from "./utils/handleToken";


axios.defaults.baseURL = "http://localhost:5000";


export const signUp = async (userInfo: signupType) => {
  try {
    const res = await axios.post("/signup", userInfo);
    return res;
  } catch (err) {
    console.log(err);
  }
};


export const login = async (loginInfo: loginType) => {
  try {
    const res = await axios.post('/login', loginInfo);
    setUserToLocalStorage(res.data.data.access, JSON.stringify(true));
    return res
  }
  catch (err) {
    console.log(err)
  }
}


export const getContacts = async () => {
  try {
    const res = await axios.get("/contacts", {
      headers: {
        Authorization: getTokenFromLocalStorage(),
      },
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};


export const getContact = async (cid: string | undefined) => {
  try {
    const res = await axios.get(`/contacts/${cid}`, {
      headers: {
        Authorization: getTokenFromLocalStorage(),
      },
    });

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
}
;


export const addContact = async (formData: FormData) => {
  try {
    await axios.post("/contacts", formData, {
      headers: {
        Authorization: getTokenFromLocalStorage(),
        "content-type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateContact = async (cid: any, payload: any) => {
  try {
    await axios.put(`/contacts/${cid}`, payload, {
      headers: {
        Authorization: getTokenFromLocalStorage(),
        "content-type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteContact = async (cid: number) => {
  try {
    await axios.delete(`/contacts/${cid}`, {
      headers: {
        Authorization: getTokenFromLocalStorage(),
      },
    });
  } catch (err) {
    console.log(err);
  }
};


import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const token = localStorage.getItem("token");
const id = localStorage.getItem("user_id");

export const postBook = (data) => {
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.post(baseUrl + "/books", data, config);
};

export const getBooks = (data) => {
   return axios.get(baseUrl + "/books", data);
};

export const getMyBooks = () => {
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.get(baseUrl + "/users/" + id,config);
};

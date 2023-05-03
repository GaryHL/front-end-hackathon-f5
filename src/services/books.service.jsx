import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;



const id = localStorage.getItem("user_id");

export const postBook = (data) => {
   const token = localStorage.getItem("token");
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
   
export const getBook = (id) =>{
   const token = localStorage.getItem("token");

   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.get(baseUrl + "/books-public/" + id,config);
}

export const getMyBooks = () => {
   const token = localStorage.getItem("token");

   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.get(baseUrl + "/users/" + id,config);
};


export const getAllBooks = () => {
   const token = localStorage.getItem("token");

   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.get(baseUrl + "/books-public",config);
};
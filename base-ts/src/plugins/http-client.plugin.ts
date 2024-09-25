// ! patron adaptador con el wrapper al fetch

//const { default: axios } = require("axios");
import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    // const resp = await fetch(url);
    // return await resp.json();
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: any) => {
    throw new Error("Not Implemented");
  },
  put: async (url: string, body: any) => {
    throw new Error("Not Implemented");
  },
  delete: async (url: string) => {
    throw new Error("Not Implemented");
  },
};

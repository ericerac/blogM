import { defineStore } from "pinia";
import { instance } from "../composable/axiosInstance.js"


type User = {
  Id: string,
  name: string,
  token: string,
}

type State = {
  user: User[],
  loading: boolean,
}

export const useLoginStore = defineStore('useLoginStore', {

  state: () => {
    return {
      user: [],
      modalError: useState<boolean>('modalError'),

    }
  },

  actions: {
    getPageData: () => {
      // // console.log(" PAGE GET PAGE DATA", n);
      const page = "post"
      const lang = "cat"
      return new Promise((resolve, reject) => {
        instance
          .get(`inici?name=${page}&lang=${lang}`)
          .then((res) => {
            console.log("RESPONSE GET PAGE DATA STORE", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },


  },

})
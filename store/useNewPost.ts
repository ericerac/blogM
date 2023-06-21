import { defineStore } from "pinia";
import { instance } from "../composable/axiosInstance.js"

export const useNewPostStore = defineStore('useNewPostStore', {

    state: () => {
      return {
        user: [],
        modalError: useState<boolean>('modalError'),
         post_Data:"",
       
  
      }
    },
  
    actions: {
      async sendPost(x) {
       
       console.log("SEND POST STORE",x);
       

        
    },
  
  
    },
  
  })
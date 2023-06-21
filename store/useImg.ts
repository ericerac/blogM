import { defineStore } from "pinia";
import { instance } from "../composable/axiosInstance.js";

type State = {
  loading: boolean;
  post_Data: string;
};

export const useImgStore = defineStore("useImgStore", {
  state: () => {
    return {
      img_data: "",
      modalError: useState<boolean>("modalError"),
    };
  },

  actions: {
    //----------------* GET IMG DATA *---------------//

    // async getImgData(n: string) {
    async getImgData(n) {
        // console.log("GET IMG STORE FUNCTION");
let namePage = n
      try {
        // await instance.get(`inici/img?name=${n}`).then((res) => {
        await instance.get(`inici/img?name=${n}`).then((res) => {
          this.img_data = res.data;
          console.log("RESPONSE IMG DATA STORE", res.data);
        });
      } catch (error) {
        console.log("ERROR IMG DATA REQUEST",error);
        
      }
    },
  },
});



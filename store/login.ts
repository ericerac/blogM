
import { defineStore } from "pinia";
import { instance } from "../composable/axiosInstance.js"
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

type User = {
  userId: string
  userToken: string
  auth: boolean
}
type State = {
  user: User
  loading: boolean
}

export const useLogUserStore = defineStore('useLogUserStore', {

  state: () => {
    return {
      modalError: false,
      loading: false,
      user:{},
      data: "",
      auth:useState<boolean>(),
    }
  },


  

  actions: {
    async loginUser (userData: string) {
      console.log("LOGIN POST STORE", userData);
      // this.loading = true;

      try {
        instance
          .post("/inici/coconexion", userData)
          .then((response) => {
            //  setHeaders(response.data.token)
            console.log("RESP LOGIN INDEX", response.data);
            let userId = response.data.userId
            let token = response.data.token
            let auth:boolean =false;

            const User = {
              userId: response.data.userId,
              toktoken: response.data.token,
            }
            cookies.set("User", JSON.stringify(User), "1h");

            if (token) {
              this.auth = true
            }
          })
      } catch (error) {
        console.log("ERREUR LOGIN", error);
      }

    },
  },
})


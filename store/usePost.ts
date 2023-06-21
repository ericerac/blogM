
import { defineStore } from "pinia";
import { instance } from "../composable/axiosInstance.js"
import axios from "axios";
import Date from "../composable/Date.js"
import { useCookies } from "vue3-cookies";


const { cookies } = useCookies();

// ---------------INTER REQUEST-----------------//

instance.interceptors.request.use(
  function (config) {

    // console.log("INTER REQUEST CONFIG", config);

    if (cookies.get("user")) {
      const AuthUser = cookies.get("user");
      const token = cookies.get("token")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else { }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// --------------INTER RESPONSE-------------//
instance.interceptors.response.use(
  function (response) {
    const supp = response.data.message;
    // console.log("INTER RESPONSE", response);
    // console.log("RESPONSE STATUS", response.status);

    // console.log("RESPONSE INTER", supp);


    return response;
  },

  //---------------___  ERREURS  ___-------------------

  (error) => {
    console.log("INTER RESPONSE ERROR", error);



    return Promise.reject(error);
  }
);

// ----------------------------------------------//


type User = {
  Id: string,
  name: string,
  token: string,
}

type State = {
  user: User,
  loading: boolean,
  post_Data: string,
}


export const usePostStore = defineStore('useLoginStore', {

  state: () => {
    return {
      user: [],
      modalError: useState<boolean>('modalError'),
      post_Data: "",
      dark: useState<boolean>('dark'),
      locality: "" as string,
      localHour: "" as string
    }
  },

  actions: {
    async getPageData() {

      // // console.log(" PAGE GET PAGE DATA", n);
      const page = "blog"
      const lang = "cat";

      try {
        const res = await instance
          .get(`inici?name=${page}&lang=${lang}`)
          .then((res) => {
             console.log("RESPONSE GET PAGE DATA STORE", res.data);
            this.post_Data = res.data
          })
      }
      catch (err) {
        console.log(err);

      };

    },

    async getLoc() {
      let userTheme = cookies.get("dark");
      // console.log("USERTIME COOKIES VALUE", userTheme);
      if (userTheme) {
        return;
      }

      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.bigdatacloud.net/data/ip-geolocation?ip=212.106.239.92&localityLanguage=en&key=bdc_fb0cd78789724292ba4ec846a10c55ed`
          )
          .then((res) => {

            let userData = {
              locality: res.data.location.localityName,
              country: res.data.country.name,
              IpAdress: res.data.ip,
              date: res.data.location.timeZone.localTime.split("T")[0],
              hour: res.data.location.timeZone.localTime
                .split("T")[1]
                .split(".")[0],
            };
            this.locality = userData.locality
            let localityCity = userData.locality
            this.localHour = res.data.location.timeZone.localTime
            this.sunTime(localityCity)
            return resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });

    },


    async sunTime(city: string) {

      // try {
      //   const res = await instance
      //     .get(`inici/astro?city=${city}`)
      //     .then((res) => {
      //        console.log("RESPONSE NEW TEST BACK REQUEST", res);


      //     })
      // }
      // catch (err) {
      //   console.log(err);

      // };

      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.weatherapi.com/v1/astronomy.json?key=43c3940307aa4e549ee130304231504&q=${city}`
          )
          .then((res) => {
            //  console.log("RESPONSE GEOLOC DATA----->", res.data.location.timeZone.localTime.split("T")[0]);
            // console.log("RESPONSE SUNRISE && SUNSET----->", res.data.astronomy.astro.sunrise, res.data.astronomy.astro.sunset);
            let SunData = {
              sunRise: res.data.astronomy.astro.sunrise,
              sunSet: res.data.astronomy.astro.sunset
            }
            let themeDark = Date(SunData) as unknown as boolean;
            this.dark = themeDark;
            cookies.set("theme", JSON.stringify(themeDark), "1h");
             
            return resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

  },

})


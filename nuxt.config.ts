// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  typescript: {
    loaders: {
      ts: {
        // silent: true,
        silent: false,
      },
      tsx: {
        silent: false,
      },
    },
  },
};

export default defineNuxtConfig({
  app: {
    head: {
      title: "blog Marta Renyer",
      meta: [
        {
          name:"description",
          content: "pagina web de Marta Renyer pallassa, clown",
        }
      ]
    },
  },
  // ... other options
  modules: ["@pinia/nuxt"],

  // pinia: {
  //   autoImports: [
  //     // automatically imports `defineStore`
  //     'defineStore', // import { defineStore } from 'pinia'
  //     ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
  //   ],
  // },
});

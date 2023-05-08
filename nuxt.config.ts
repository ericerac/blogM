// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  typescript: {
    loaders: {
      ts: {
        silent: true
      },
      tsx: {
        silent: true
      }
    }
  }
}

export default defineNuxtConfig({
    // ... other options
    modules: ['@pinia/nuxt'],

    // pinia: {
    //   autoImports: [
    //     // automatically imports `defineStore`
    //     'defineStore', // import { defineStore } from 'pinia'
    //     ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    //   ],
    // },
  })

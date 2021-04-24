import Vue from 'vue'
import Vuetify, { VAvatar, VIcon } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAvatar,
    VIcon,
  },
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#49cd9f',
        secondary: '#9fa8da',
        accent: '#4FEEBA',
      },
    },
  },
})

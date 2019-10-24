import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './language'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  messages
})

export default i18n

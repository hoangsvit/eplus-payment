import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-eplus-payment'

export default boot(({ app }) => {
  app.use(VuePlugin)
})

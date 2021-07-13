import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import Unicon from 'vue-unicons'

import {
    uniEnvelope,
    uniKeySkeleton,
    uniEstate,
    uniCreditCard,
    uniBill,
    uniSetting,
    uniArrowCircleUp,
    uniPlusCircle,
    uniCheckCircle,
    uniTimesCircle
} from 'vue-unicons/dist/icons'

Unicon.add([
    uniEnvelope,
    uniKeySkeleton,
    uniEstate,
    uniCreditCard,
    uniBill,
    uniSetting,
    uniArrowCircleUp,
    uniPlusCircle,
    uniCheckCircle,
    uniTimesCircle
])

const app = createApp(App)
app.use(router)
app.use(Unicon)
app.mount('#app')

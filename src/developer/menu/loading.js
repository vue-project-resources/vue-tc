import loading from "../views/loading.vue"
import { throttle,capitalize } from "./directives"
export default {
    install(Vue)  {
        Vue.component("loading",loading);
        Vue.directive("throttle",throttle);
        Vue.filter("capitalize",capitalize);
    }
}
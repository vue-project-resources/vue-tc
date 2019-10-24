var eventBus = {
    install(Vue,options) {
        Vue.prototype.$bus = new Vue();
    }
};
export default eventBus;
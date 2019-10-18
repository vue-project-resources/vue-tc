<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="submit">
        点击按钮
    </div>
  </div>
</template>

<script>
import { configApi } from '../urlApi/configApi'
import { LoginAxios } from '../axios/axios'
import axios from 'axios';
export default {
    data() {
      return {
        
      }
    },
    methods: {
        async submit () {
          // axios.all([LoginAxios.login(configApi.login), LoginAxios.RegAbc(configApi.reg)])
          //   .then(axios.spread(function (acct, perms) {
          //       console.log(acct, perms)
          // }));
          const data  = await LoginAxios.login(configApi.login);
          console.log(data.data);
          console.log(data.status);
          console.log(data.statusText);
          console.log(data.headers);
          console.log(data.config);
        }
    },
    mounted() {
      
    },
}
</script>

<style lang="sass">
  
</style>

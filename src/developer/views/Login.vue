<template>
    <div>
        login
      {{message | capitalize(message)}}
      <loading></loading>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "hello world"
        }
    }
}
</script>

<style lang="less" scoped>

</style>

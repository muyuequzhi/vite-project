<script setup lang="ts">
import { onBeforeMount } from 'vue'
// import { getUserInfo } from '@/request/api'
import { getUserInfo } from '@/mock/api'

onBeforeMount(() => {
  //调用方法
  getUserInfo()
    .then(function (res) {
      console.log(res.data)
    })
    .catch(function (error) {
      console.log(error)
    })
})
</script>

<template>
  <div>login</div>
</template>

<style scoped></style>

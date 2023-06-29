<template>
  <div id="app-main">
    <van-button @click="doOpen">按钮</van-button>
    <KeyBoard v-model:isShow="isShow"></KeyBoard>
    <p>你好</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import KeyBoard from "@/package/keyboard/index.vue";

  const isShow = ref<boolean>(false);
  const doOpen = () => {
    isShow.value = true;
  }
</script>

<style lang="scss">
  @import "@/assets/css/app.css";
</style>

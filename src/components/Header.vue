<template>
  <div
    class="w-full h-12 bg-blue-900 flex justify-between items-center text-white px-2"
  >
    <p class="font-extrabold text-xl">La Vraie Team Rocket</p>
    <p
      class="gras cursor-pointer px-2 rounded border-2 border-white bg-black text-white font-medium hover:bg-white hover:text-black"
      @click="open = true"
    >
      Login
    </p>
  </div>
  <div v-if="open">
    <LoginVue @closeModale="closeModale"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginVue from "./Login.vue";
const open = ref(false);

const closeModale = () => {
  open.value = false
}
</script>

<style scoped>
.gras:hover {
  font-weight: 800;
}
</style>

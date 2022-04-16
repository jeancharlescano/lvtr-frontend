<template>
  <div class="overflow-hidden bg">
    <HeaderVue />
    <!-- <Homework /> -->
    <Calendar/>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

import HeaderVue from "./components/Header.vue";
import Calendar from "./views/Calendar.vue";
// import Homework from "./views/Homework.vue";

// import {
//   deleteHomework,
//   getHomework,
//   postHomework,
// } from "./utilities/homeworks";

// import dayjs from "dayjs";
// import locale_fr from "dayjs/locale/fr";

// const homeworks = ref();
const admin = ref(true);
// const isActive = ref(false);
// const newHomework = ref({
//   subject: "x",
//   homeworkType: "x",
//   description: "x",
//   creationDate: new Date(),
//   deliveryDate: "x",
// });

// const formatDate = (date) => {
//   const momentDate = dayjs(new Date(date))
//     .locale(locale_fr)
//     .format("D MMMM, à HH [h] mm");
//   return momentDate;
// };

onBeforeMount(async () => {
  if (localStorage.getItem("admin") == "RT28nr58krr3HHdL5P96Cg") {
    admin.value = true;
  }
  try {
    // homeworks.value = await getHomework();
  } catch (error) {
    console.log(error);
  }
});

// const delHomework = async (id) => {
//   await deleteHomework(id);
// };

// const createHomework = async () => {
//   await postHomework(newHomework.value);
// };
</script>

<style>
html {
  /* background: url(./assets/img/DarkWallLvtrNeon.jpg); */
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: beige;
}
</style>

<template>
  <div class="px-32 py-20 flex justify-center">
    <table
      class="text-md text-gray-300 font-bold mb-4"
    >
      <thead class=" justify-around bg-blue-900 rounded-xl bg-opacity-70">
        <tr class="border-b w-full">
          <th class="">Matière</th>
          <th class="">Type</th>
          <th class="">Date de création</th>
          <th class="">Date de rendu</th>
          <th class="">Description</th>
          <th class="">
            <button>
              <img src="../assets/img/icons8-ajouter-30.png" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-opacity-70 bg-gray-500 font-normal"
          v-for="(homework, index) in homeworks"
          :key="index"
        >
          <td class="">{{ homework.matiere }}</td>
          <td class="">{{ homework.type }}</td>
          <td class="">{{ homework.date_creation }}</td>
          <td class="">{{ homework.date_rendu }}</td>
          <td class="">{{ homework.description }}</td>
          <td class="">
            <button
              type="button"
              class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { getAllHomeworks } from "../utilities/homeworkRequest.js";

const homeworks = ref([]);

onBeforeMount(async () => {
  homeworks.value = await getAllHomeworks();
  console.log(homeworks.value);
});
</script>

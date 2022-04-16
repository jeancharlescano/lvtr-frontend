<template>
  <div class="h-screen w-screen flex justify-center items-center -mt-12">
    <div
      class="bg-black bg-opacity-70 text-white flex flex-col items-center rounded-3xl border-2 border-white w-96"
    >
      <div class="flex justify-end mt-2 w-full px-3">
        <button
          class="text-white font-bold rounded-lg border-2 px-2 bg-red-600 hover:bg-white hover:text-red-600"
          @click="emit('closeModale')"
        >
          X
        </button>
      </div>
      <p class="text-2xl font-bold mt-2">Devoir</p>
      <div class="mt-4">
        <div class="flex flex-col">
          <label class="text-lg font-bold"> Matière</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            placeholder="Entrez la matière"
            v-model="homework.matiere"
          />
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-lg font-bold"> Type</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            placeholder="Dm, Ds, Tp ..."
            v-model="homework.type"
          />
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-lg font-bold">Date de rendu</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="date"
            v-model="homework.dateRendu"
          />
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-lg font-bold">Description</label>
          <textarea
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            placeholder="Entrez une description"
            v-model="homework.description"
          >
          </textarea>
        </div>
      </div>
      <button
        class="my-8 rounded border-2 px-4 font-semibold hover:bg-white hover:text-black hover:font-extrabold"
        @click="addHomework"
      >
        Ajouter
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { postHomework } from "../utilities/homeworkRequest.js";

const emit = defineEmits(["closeModale"]);

const homework = ref({
  matiere: "",
  type: "",
  dateCreation: "01/01/2022",
  dateRendu: "",
  description: "",
  idAdmin: "1",
});

const addHomework = async () => {
  console.log("titi");
  await postHomework(homework.value).then((value) => {
    console.log(value);
    if (value.data == true) {
      console.log("good");
    }
  });
  emit("closeModale");
};
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center -mt-12">
    <div
      class="bg-blue-900 text-white flex flex-col items-center rounded-3xl border-2 border-white w-96"
    >
      <div class="flex justify-end mt-2 w-full px-3">
        <button
          class="text-white font-bold rounded-lg border-2 px-2 bg-red-600 hover:bg-white hover:text-red-600"
          @click="emit('closeModale')"
        >
          X
        </button>
      </div>
      <p class="text-2xl font-bold mt-2">Login</p>
      <div class="mt-4">
        <div class="flex flex-col">
          <label class="text-lg font-bold"> pseudo</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            placeholder="Entrez votre pseudo"
            v-model="user.pseudo"
          />
          
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-lg font-bold"> mot de passe</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="password"
            placeholder="Entrez votre mot de passe"
            v-model="user.password"
          />
        </div>
      </div>
      <button
        class="my-8 rounded border-2 px-4 font-semibold hover:bg-white hover:text-black hover:font-extrabold"
        @click="login"
      >
        Connexion
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["closeModale"]);

const user = ref({
  pseudo: null,
  password: null,
})

const login = () => {
  console.log(`pseudo :  ${user.value.pseudo} \n password : ${user.value.password}`);
  emit("closeModale");
};
</script>

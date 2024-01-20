<script lang="ts" setup>
import Cart from "./Cart.vue";
import { ref } from "vue";
const openNav = ref<boolean>(false);
const openCart = ref<boolean>(false);
</script>

<template>
  <nav :class="`bg-blue-600 py-4 px-4 sticky top-0 drop-shadow-md z-10 font-Poppins`">
    <div class="container mx-auto flex justify-between gap-4 items-center">
      <h1 class="text-white">MyApp</h1>
      <div :class="`ml-auto  absolute sm:relative max-sm:bg-blue-600 max-sm:left-0 max-sm:p-4 max-sm:h-fit max-sm:w-full flex max-sm:flex-col gap-4 transition-all duration-300 ${openNav ? 'max-sm:top-14' : 'max-sm:-top-40'}`">
        <router-link to="/" class="text-white">Home</router-link>
        <router-link to="/about" class="text-white">About</router-link>
      </div>
      <span @click="openCart = !openCart" class="cursor-pointer max-sm:ml-auto">
        <v-icon name="bi-cart4" inverse scale="1.2"/>
      </span>
      <button  class="text-white flex justify-center items-center  sm:hidden  z-10 rounded-md" @click="openNav = !openNav">
         <v-icon v-if="!openNav" name="bi-list" scale="1.2" />
         <v-icon v-else name="bi-x" scale="1.2" />

      </button>
    </div>
  </nav>
  <Cart :open="openCart" />
</template>

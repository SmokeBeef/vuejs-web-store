<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<template>
  <Navbar />
  <main class="px-4 font-Poppins">
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </main>
</template>

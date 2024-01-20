<script lang="ts" setup>
import { onMounted, ref } from "vue";

const data = ref();

onMounted(async () => {
  const response = await (
    await fetch("http://localhost:8000/api/alat", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2FkbWluL2xvZ2luIiwiaWF0IjoxNzAzNzc1NDc0LCJleHAiOjE3MDM3NzkwNzQsIm5iZiI6MTcwMzc3NTQ3NCwianRpIjoibmt4MzZLUnd2REdQZGxwUSIsInN1YiI6IjUiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.rSNl6bFShV3-VyUlAbBGzhAfVZ0inaCKV_4JXl9EejU",
      },
      method: "POST",
      body: {
        kategori_id: 2,
        nama: "tv",
        deskripsi: "bagus",
        hargaperhari: 10000,
        stok: 4,
      },
    })
  ).json();
  data.value = await response.data;
  console.log(await response);
});
</script>

<template>
  <h1>About</h1>
</template>

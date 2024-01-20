<script lang="ts" setup>
import { onMounted, ref, onUpdated } from "vue";
import Card from "../components/Card.vue";
import type { product } from "../types/product";

const products = ref<product[]>();
const categories = ref<string[]>();
const selectedCategory = ref<string>("");

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    console.log(data);

    products.value = data;
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data: string[] = await response.json();
    categories.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getProducts();
  getCategories();
});

onUpdated(() => {
  console.log(selectedCategory);
});
</script>

<template>
  <form action="" class="mt-4 flex gap-4">
    <select
      v-model="selectedCategory"
      class="border-2 border-blue-200 rounded-md"
    >
      <option value="" class="text-center">---categories---</option>
      <option v-for="category in categories" :value="category">
        {{ category }}
      </option>
    </select>

    <button
      type="submit"
      class="bg-blue-600 px-3 py-2 rounded-md flex active:outline active:outline-blue-400 hover:bg-blue-700 text-white items-center gap-2"
    >
    Search
    </button>
  </form>
  <div
    class="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center"
  >
    <Card
      v-if="products"
      v-for="product in products"
      :id="product.id"
      :title="product.title"
      :img="product.image"
      :category="product.category"
      :desc="product.description"
      :price="product.price"
      :rating="product.rating"
    />
    <div v-else>Loading...</div>
  </div>
</template>

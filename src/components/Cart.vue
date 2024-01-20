<script lang="ts" setup>
import { cartStore } from "../store/cart";
import { onUpdated, ref } from "vue";

const totalPrice = ref<number>(0);

defineProps<{
  open: boolean;
}>();

const carts = cartStore.cart;
onUpdated(() => {
  totalPrice.value = carts.reduce((value, data) => {
    return data.checkOut ? data.qty * data.price + value : value;
  }, 0);
  console.log(totalPrice);
});
</script>

<template>
  <aside
    :class="`bg-blue-300 flex flex-col min-h-[calc(100vh-55px)] font-Poppins fixed  w-80 transition-all duration-300 ${
      open ? 'right-0' : '-right-80'
    }`"
  >
    <h3 class="text-center text-2xl">Cart Item</h3>
    <div class="flex mt-2 flex-col gap-2">
      <div v-for="cart in carts" class="flex mx-2 gap-2">
        <input
          type="checkbox"
          :value="true"
          :checked="cart.checkOut"
          v-model="cart.checkOut"
        />
        <div class="bg-slate-200 h-24 rounded-md w-full flex gap-2">
          <img
            :src="cart.image"
            class="w-32 h-full object-cover rounded-s-md"
            alt=""
          />
          <div class="flex w-full flex-col ">
            <span class="w-44 truncate">
              {{ cart.title }}
            </span>
            <span>
                price : $.{{ cart.price }}
            </span>
            <span class="mt-auto">
              total :
              {{ cart.qty }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute flex-col gap-2 bottom-0 flex left-0 right-0 bg-blue-500 py-2"
    >
      <span class="w-72 mx-auto text-white">Price : $.{{ totalPrice }}</span>
      <button
        class="bg-violet-600 hover:bg-violet-700 active:outline outline-violet-400 w-72 mx-auto py-2 text-white rounded-lg"
      >
        Check Out
      </button>
    </div>
  </aside>
</template>

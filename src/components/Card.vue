<script lang="ts" setup>
import { cartStore } from '../store/cart';

const props = defineProps<{
  id: number;
  title: string;
  img: string;
  desc: string;
  price: number;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}>();

const addToCart = () => {
  const carts = cartStore.cart
  const cartIndex = carts.findIndex((val) => val.id === props.id)
  if(cartIndex === -1) {
    cartStore.cart.push({
      id: props.id,
      title: props.title,
      price: props.price,
      category: props.category,
      description: props.desc,
      image: props.img,
      qty: 1,
      checkOut: true
    })
  } else {
    cartStore.cart[cartIndex].qty++
  }
  
}

</script>
 
<template>
  <div
    class="bg-blue-300 max-w-[48em] w-full sm:w-40 md:w-60 rounded-md border border-slate-300"
  >
    <img
      :src="img"
      :alt="'image of ' + img"
      class="w-full h-36 rounded-t-md md:h-60 object-cover"
    />
    <div class="p-4">
      <h4 class="truncate text-xl font-">{{ title }}</h4>
      <p class="truncate">{{ desc }}</p>
      <p>$.{{ price }}</p>
      <button
      @click="() => addToCart()" 
      class="bg-blue-600 px-3 py-2 rounded-md flex active:outline active:outline-blue-400 hover:bg-blue-700 text-white items-center gap-2">
        Add To <v-icon name="bi-cart4" inverse scale="1.1" />
      </button>
    </div>
  </div>
</template>

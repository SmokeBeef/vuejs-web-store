import { reactive } from "vue";
import type { cart } from "../types/cart";

export const cartStore = reactive<{ cart: cart[] }>({
  cart: [],
});

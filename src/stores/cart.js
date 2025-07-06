import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  //data
  const cartItems = ref([]);
  //methods
  function additem(item) {
    let exists = false;
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == item.id) {
        cartItems.value[i].quantity += item.quantity;
        exists = true;
        break;
      }
    }
    if (!exists) {
      cartItems.value.push(JSON.parse(JSON.stringify(item)));
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  }
  //getCartItems
  function getCartItems() {
    if (localStorage.getItem("cartItems")) {
      cartItems.value = JSON.parse(localStorage.getItem("cartItems"));
    }
  }
  //deleteItem
  function deleteItem(id) {
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == id) {
        cartItems.value.splice(i, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
        break;
      }
    }
  }

  //reset items in local storage
  function resetItems() {
    cartItems.value = [];
    localStorage.removeItem("cartItems");
  }
  return { cartItems, additem, getCartItems, deleteItem, resetItems };
});

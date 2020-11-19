<template>
  <div>
    <!-- <input type="image" src={{this.cartImagePath}} width="48" height="48" /> -->
    <button id="cart" v-on:click="openCart()">
      <img src="./shoppingcart.png" />
    </button>
  </div>
</template>

<script src="./shopping-cart.js"></script>

<style scoped>
#cart {
  cursor: pointer;
  outline: none;
  padding: 0;
  border: none;
  background: none;
}
</style>


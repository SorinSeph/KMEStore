<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <div class="item">
        <img :src="`http://localhost:8081/images/${product.image}`" />
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script src="./products-container.js"></script>
<style lang="css" src="./products-container.css"></style>
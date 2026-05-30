<template>
  <div class="card">
    <img :src="product.imageUrl" :alt="product.name" />
    <div class="card-body">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <p class="stock">Stock: {{ product.stock }}</p>
      <div class="buttons">
        <RouterLink :to="`/product/${product.id}`">Ver detalle</RouterLink>
        <button @click="$emit('added-to-cart', product)">Añadir al carrito</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  product: Object
})

defineEmits(['added-to-cart'])
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
.card img { width: 100%; height: 180px; object-fit: cover; }
.card-body { padding: 12px; }
.price { font-weight: bold; color: #2563eb; font-size: 1.1rem; }
.stock { color: #666; font-size: 0.9rem; }
.buttons { display: flex; gap: 8px; margin-top: 10px; }
.buttons a { padding: 6px 12px; background: #e2e8f0; border-radius: 6px; text-decoration: none; color: #333; }
.buttons button { padding: 6px 12px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; }
</style>
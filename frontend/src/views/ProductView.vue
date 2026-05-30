<template>
  <div class="product-detail">
    <RouterLink to="/" class="back">← Volver</RouterLink>
    <p v-if="loading">Cargando producto...</p>
    <p v-if="error">Error: {{ error }}</p>
    <div v-if="data" class="detail">
      <img :src="data.imageUrl" :alt="data.name" />
      <div class="info">
        <h1>{{ data.name }}</h1>
        <p>{{ data.description }}</p>
        <p class="price">${{ data.price }}</p>
        <p class="stock">Stock disponible: {{ data.stock }}</p>
        <button @click="addToCart">🛒 Añadir al carrito</button>
        <RouterLink :to="`/product/${data.id}/edit`" class="edit-btn">✏️ Editar</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useApi, API_BASE } from '../composables/useApi'

const route = useRoute()
const { data, loading, error, fetchData } = useApi()

const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const existing = cart.find(i => i.id === data.value.id)
  if (existing) { existing.quantity++ } else { cart.push({ ...data.value, quantity: 1 }) }
  localStorage.setItem('cart', JSON.stringify(cart))
  alert('Producto añadido al carrito ✅')
}

onMounted(() => fetchData(`${API_BASE}/api/products/${route.params.id}`))
</script>

<style scoped>
.product-detail { max-width: 800px; margin: 0 auto; padding: 20px; }
.back { display: inline-block; margin-bottom: 20px; color: #2563eb; text-decoration: none; }
.detail { display: flex; gap: 30px; flex-wrap: wrap; }
.detail img { width: 100%; max-width: 350px; border-radius: 10px; object-fit: cover; }
.info { flex: 1; }
.price { font-size: 1.5rem; font-weight: bold; color: #2563eb; }
.stock { color: #666; margin-bottom: 20px; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; margin-right: 10px; }
.edit-btn { padding: 10px 20px; background: #f59e0b; color: white; border-radius: 6px; text-decoration: none; }
</style>

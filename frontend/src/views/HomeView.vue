<template>
  <div class="home">
    <h1>🛒 MercApp</h1>

    <div class="filters">
      <input v-model="search" placeholder="Buscar producto..." />
      <select v-model="selectedCategory">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
      <RouterLink to="/product/new" class="new-btn">➕ Nuevo Producto</RouterLink>
      <RouterLink to="/cart" class="cart-btn">🛒 Carrito ({{ cartCount }})</RouterLink>
    </div>

    <p v-if="loading">Cargando productos...</p>
    <p v-if="error">Error: {{ error }}</p>

    <div class="grid" v-if="!loading">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @added-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useApi, API_BASE } from '../composables/useApi'
import ProductCard from '../components/ProductCard.vue'

const { data: products, loading, error, fetchData } = useApi()
const { data: categories, fetchData: fetchCategories } = useApi()

const search = ref('')
const selectedCategory = ref('')
const cart = ref(JSON.parse(localStorage.getItem('cart') || '[]'))

const cartCount = computed(() => cart.value.reduce((a, b) => a + b.quantity, 0))

const filteredProducts = computed(() => {
  if (!products.value) return []
  return products.value.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase()) ||
      p.description.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = selectedCategory.value === '' || p.categoryId === selectedCategory.value
    return matchSearch && matchCat
  })
})

const addToCart = (product) => {
  const existing = cart.value.find(i => i.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

onMounted(() => {
  fetchData(`${API_BASE}/api/products`)
  fetchCategories(`${API_BASE}/api/categories`)
})
</script>

<style scoped>
.home { max-width: 1200px; margin: 0 auto; padding: 20px; }
h1 { text-align: center; margin-bottom: 20px; }
.filters { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.filters input { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 6px; }
.filters select { padding: 8px; border: 1px solid #ddd; border-radius: 6px; }
.cart-btn { padding: 8px 16px; background: #2563eb; color: white; border-radius: 6px; text-decoration: none; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
.new-btn { padding: 8px 16px; background: #22c55e; color: white; border-radius: 6px; text-decoration: none; }
</style>

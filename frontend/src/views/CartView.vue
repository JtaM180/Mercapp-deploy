<template>
  <div class="cart">
    <RouterLink to="/" class="back">← Volver</RouterLink>
    <h1>🛒 Mi Carrito</h1>

    <p v-if="items.length === 0">El carrito está vacío</p>

    <div v-else>
      <div class="item" v-for="item in items" :key="item.id">
        <img :src="item.imageUrl" :alt="item.name" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price }}</p>
        </div>
        <div class="quantity">
          <button @click="decrease(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increase(item)">+</button>
        </div>
        <p class="subtotal">${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button class="remove" @click="remove(item)">🗑️</button>
      </div>

      <div class="total">
        <h2>Total: ${{ total }}</h2>
        <button @click="clearCart">Vaciar carrito</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const items = ref(JSON.parse(localStorage.getItem('cart') || '[]'))

const save = () => localStorage.setItem('cart', JSON.stringify(items.value))

const increase = (item) => { item.quantity++; save() }
const decrease = (item) => { if (item.quantity > 1) { item.quantity--; save() } }
const remove = (item) => { items.value = items.value.filter(i => i.id !== item.id); save() }
const clearCart = () => { items.value = []; save() }

const total = computed(() =>
  items.value.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)
)
</script>

<style scoped>
.cart { max-width: 800px; margin: 0 auto; padding: 20px; }
.back { display: inline-block; margin-bottom: 20px; color: #2563eb; text-decoration: none; }
.item { display: flex; align-items: center; gap: 15px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px; }
.item img { width: 80px; height: 80px; object-fit: cover; border-radius: 6px; }
.item-info { flex: 1; }
.quantity { display: flex; align-items: center; gap: 8px; }
.quantity button { width: 28px; height: 28px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; background: #f1f5f9; }
.subtotal { font-weight: bold; color: #2563eb; min-width: 60px; text-align: right; }
.remove { background: none; border: none; cursor: pointer; font-size: 1.2rem; }
.total { text-align: right; margin-top: 20px; }
.total button { padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; }
</style>
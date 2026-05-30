<template>
  <div class="form-view">
    <RouterLink to="/" class="back">← Volver</RouterLink>
    <h1>➕ Nuevo Producto</h1>

    <form class="form" @submit.prevent="submit">
      <div class="field">
        <label>Nombre *</label>
        <input v-model="form.name" type="text" placeholder="Nombre del producto" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <div class="field">
        <label>Descripción</label>
        <textarea v-model="form.description" placeholder="Descripción del producto"></textarea>
      </div>
      <div class="field">
        <label>Precio * (mayor a 0)</label>
        <input v-model="form.price" type="number" step="0.01" placeholder="0.00" />
        <span v-if="errors.price" class="error">{{ errors.price }}</span>
      </div>
      <div class="field">
        <label>Categoría *</label>
        <select v-model="form.categoryId">
          <option value="">Selecciona una categoría</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
        <span v-if="errors.categoryId" class="error">{{ errors.categoryId }}</span>
      </div>
      <div class="field">
        <label>Stock (mayor o igual a 0)</label>
        <input v-model="form.stock" type="number" placeholder="0" />
        <span v-if="errors.stock" class="error">{{ errors.stock }}</span>
      </div>
      <div class="field">
        <label>URL de imagen</label>
        <input v-model="form.imageUrl" type="text" placeholder="https://..." />
        <span v-if="errors.imageUrl" class="error">{{ errors.imageUrl }}</span>
      </div>
      <button type="submit">Crear Producto</button>
      <p v-if="success" class="success">¡Producto creado exitosamente!</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useApi, API_BASE } from '../composables/useApi'

const router = useRouter()
const { data: categories, fetchData: fetchCategories } = useApi()

const form = ref({ name: '', description: '', price: '', categoryId: '', stock: 0, imageUrl: '' })
const errors = ref({})
const success = ref(false)

const validate = () => {
  errors.value = {}
  if (!form.value.name) errors.value.name = 'El nombre es obligatorio'
  if (!form.value.price || form.value.price <= 0) errors.value.price = 'El precio debe ser mayor a 0'
  if (!form.value.categoryId) errors.value.categoryId = 'La categoría es obligatoria'
  if (form.value.stock < 0) errors.value.stock = 'El stock no puede ser negativo'
  if (form.value.imageUrl && !form.value.imageUrl.startsWith('http')) errors.value.imageUrl = 'La URL debe comenzar con http'
  return Object.keys(errors.value).length === 0
}

const submit = async () => {
  if (!validate()) return
  const res = await fetch(`${API_BASE}/api/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...form.value,
      price: parseFloat(form.value.price),
      stock: parseInt(form.value.stock),
      categoryId: parseInt(form.value.categoryId)
    })
  })
  if (res.ok) {
    success.value = true
    setTimeout(() => router.push('/'), 1500)
  }
}

onMounted(() => fetchCategories(`${API_BASE}/api/categories`))
</script>

<style scoped>
.form-view { max-width: 600px; margin: 0 auto; padding: 20px; }
.back { display: inline-block; margin-bottom: 20px; color: #2563eb; text-decoration: none; }
.form { display: flex; flex-direction: column; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 4px; }
label { font-weight: bold; font-size: 0.9rem; }
input, select, textarea { padding: 8px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; }
textarea { height: 80px; resize: vertical; }
button { padding: 10px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; }
.error { color: #ef4444; font-size: 0.85rem; }
.success { color: #22c55e; font-weight: bold; }
</style>

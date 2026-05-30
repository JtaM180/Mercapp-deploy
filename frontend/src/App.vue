<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <div class="loading-screen">
          <p>⏳ Cargando página...</p>
        </div>
      </template>
    </Suspense>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #2563eb;
}
</style>
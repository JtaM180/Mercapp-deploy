<template>
  <div class="about">
    <RouterLink to="/" class="back">← Volver</RouterLink>
    <h1>Acerca de MercApp</h1>
    <p>MercApp es un catálogo de productos desarrollado con Vue 3 y una API REST propia.</p>
    <p>Desarrollado como proyecto de la materia <strong>Aplicaciones Web</strong> - Universidad Politécnica Salesiana.</p>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
.back { display: inline-block; margin-bottom: 20px; color: #2563eb; text-decoration: none; }
h1 { margin-bottom: 20px; }
p { margin-bottom: 10px; line-height: 1.6; }
</style>
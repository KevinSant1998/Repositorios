<template>
  <div style="min-height: 100vh; background-color: #f3f3f3; font-family: sans-serif;">
    <header style="background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 16px 0; margin-bottom: 40px;">
      <div style="max-width: 1140px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;">
        <h1 style="font-size: 20px; font-weight: bold; color: orange;">Aseguradora App</h1>
        <nav style="display: flex; gap: 20px;">
          <router-link to="/" style="color: #444; text-decoration: none; font-weight: 500;">Inicio</router-link>
          <router-link to="/nuevo" style="color: #444; text-decoration: none; font-weight: 500;">Nuevo</router-link>
        </nav>
      </div>
    </header>

    <main style="max-width: 1140px; margin: 0 auto; padding: 0 20px;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
/* Puedes agregar estilos globales aquí si lo necesitas */
a.router-link-active {
  color: orange;
}
</style>

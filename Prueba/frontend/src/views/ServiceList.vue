<template>
  <div style="max-width: 800px; margin: 40px auto; padding: 20px; font-family: sans-serif;">
    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Servicios Registrados</h1>

    <div v-if="services.length === 0" style="color: gray; text-align: center;">
      No hay servicios disponibles.
    </div>

    <ul v-else style="list-style: none; padding: 0;">
      <li v-for="s in services" :key="s._id" style="background: #f9f9f9; margin-bottom: 12px; padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <p style="font-weight: bold; margin-bottom: 4px;">{{ s.numeroPoliza }}</p>
          <p style="margin: 4px 0;">{{ s.tipoSeguro }} - {{ s.titular }}</p>
          <p style="font-size: 14px; color: #555;">$ {{ s.monto }}</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button @click="editarServicio(s._id)" style="padding: 6px 12px; background-color: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer;">Editar</button>
          <button @click="eliminarServicio(s._id)" style="padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer;">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '@/api/axios'

const router = useRouter()
const services = ref([])

const obtenerServicios = async () => {
  try {
    const { data } = await apiClient.get('/services')
    services.value = data
    console.log('✅ Servicios cargados:', data)
  } catch (error) {
    console.error('❌ Error al obtener servicios:', error)
  }
}

const eliminarServicio = async (id) => {
  if (confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
    try {
      await apiClient.delete(`/services/${id}`)
      await obtenerServicios()
    } catch (error) {
      console.error('❌ Error al eliminar servicio:', error)
    }
  }
}

const editarServicio = (id) => {
  router.push(`/editar/${id}`)
}

onMounted(() => {
  obtenerServicios()
})
</script>

import { defineStore } from 'pinia'
import apiClient from '@/api/axios'
import { ref } from 'vue'

export const useServiceStore = defineStore('serviceStore', () => {
  const servicios = ref([])

  const cargarServicios = async () => {
    try {
      const { data } = await apiClient.get('/services')
      servicios.value = data
    } catch (error) {
      console.error('Error al cargar servicios', error)
    }
  }

  const eliminarServicio = async (id) => {
    try {
      await apiClient.delete(`/services/${id}`)
      await cargarServicios()
    } catch (error) {
      console.error('Error al eliminar servicio', error)
    }
  }

  return {
    servicios,
    cargarServicios,
    eliminarServicio
  }
})

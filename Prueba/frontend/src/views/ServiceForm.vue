<template>
  <div style="max-width: 600px; margin: 40px auto; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); font-family: sans-serif;">
    <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 20px;">
      {{ isEdit ? 'Editar Servicio' : 'Crear Servicio' }}
    </h2>

    <form @submit.prevent="handleSubmit">
      <div style="margin-bottom: 16px;">
        <label style="display: block; font-weight: 500; margin-bottom: 4px;">Número de Póliza</label>
        <input v-model="form.numeroPoliza" type="text" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px;" />
      </div>

      <div style="margin-bottom: 16px;">
        <label style="display: block; font-weight: 500; margin-bottom: 4px;">Tipo de Seguro</label>
        <input v-model="form.tipoSeguro" type="text" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px;" />
      </div>

      <div style="margin-bottom: 16px;">
        <label style="display: block; font-weight: 500; margin-bottom: 4px;">Titular</label>
        <input v-model="form.titular" type="text" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px;" />
      </div>

      <div style="margin-bottom: 24px;">
        <label style="display: block; font-weight: 500; margin-bottom: 4px;">Monto</label>
        <input v-model.number="form.monto" type="number" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px;" />
      </div>

      <button type="submit" style="background-color: orange; color: white; padding: 10px 16px; border: none; border-radius: 8px; cursor: pointer;">
        {{ isEdit ? 'Actualizar' : 'Guardar' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiClient from '@/api/axios.js'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const isEdit = !!id

const form = ref({
  numeroPoliza: '',
  tipoSeguro: '',
  titular: '',
  monto: 0,
})

onMounted(async () => {
  if (isEdit) {
    const { data } = await apiClient.get(`/services/${id}`)
    form.value = data
  }
})

const handleSubmit = async () => {
  if (isEdit) {
    await apiClient.put(`/services/${id}`, form.value)
  } else {
    await apiClient.post('/services', form.value)
  }
  router.push('/')
}
</script>

<style scoped></style>

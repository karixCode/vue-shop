<script setup>
import store from '@/store/store.js'
import axios from 'axios'
import OrdersList from '@/components/OrdersList.vue'
import { onMounted, ref } from 'vue'

const orders = ref([])

const getOrders = async () => {
  try {
    const response = await axios.get(`${store.state.API_URL}order`, {
      headers: {
        Authorization: `Bearer ${store.state.userToken}`
      }
    })

    console.log('заказы получены')
    orders.value = response.data.data
    console.log(orders.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getOrders()
})
</script>

<template>
  <OrdersList :orders="orders">Оформленные заказы</OrdersList>
</template>

<style scoped>


</style>

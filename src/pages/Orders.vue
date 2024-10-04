<script setup>
import store from '@/store/store.js'
import axios from 'axios'

// const getOrPostOrders = async (method) => {
//   try {
//     const response = await `axios.${method}`(`${store.state.API_URL}order`, null, {
//       headers: {
//         Authorization: `Bearer ${rootState.userToken}`
//       }
//     })
//
//     if(method === 'post') console.log('товары добавлены')
//     if(method === 'get') console.log('товары получены')
//     console.log(response.data.data)
//   }catch(error) {
//     console.error(error)
//   }
// }
const getOrders = async () => {
  try {
    const response = await axios.get(`${store.state.API_URL}order`, null, {
      headers: {
        Authorization: `Bearer ${store.state.userToken}`
      }
    })

    console.log('товары получены')
    console.log(response.data.data)
  }catch(error) {
    console.error(error)
  }
}
</script>

<template>

</template>

<style scoped>

</style>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MyHeader from '@/components/MyHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/UI/Drawer.vue'
import Modal from '@/components/UI/Modal.vue'
import Login from '@/components/LoginAndRegister/LoginForm.vue'
import store from '@/store/store.js'


const products = ref([])
const modalLoginVisible = ref(false)
const drawerVisible = ref(false)

onMounted(async () => {
  try {
    const response = await axios.get(store.state.API_URL + 'products')
    products.value = response.data.data

    if(store.state.isAuthenticated) {
      await store.dispatch('basketStore/updateProductsInBasket')
      console.log('Товары загружены')
    }
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
    <CardList :products="products"> Каталог товаров</CardList>
</template>

<style scoped>

</style>
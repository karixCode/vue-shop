<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MyHeader from '@/components/UI/MyHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/UI/Drawer.vue'
import Modal from '@/components/UI/Modal.vue'
import Login from '@/components/Login.vue'

const products = ref([])
const modalVisible = ref(false)
const drawerVisible = ref(false)

const showModal = () => {
  modalVisible.value = true
}

const showDrawer = () => {
  drawerVisible.value = true
}

onMounted(async () => {
  try {
    const response = await axios.get('http://lifestealer86.ru/public/api-shop/products')
    const data = response.data.data
    products.value = data
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <div id="app">
    <MyHeader @click="getProducts" @showModal="showModal" @showDrawer="showDrawer" />
    <CardList :products="products"> Каталог товаров</CardList>
    <Modal v-model:show="modalVisible">
      <Login/>
    </Modal>
    <Drawer v-model:show="drawerVisible" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: #5c5c5c;
  transition: 0.3s;
}

a:hover {
  color: #9dd458;
}
</style>

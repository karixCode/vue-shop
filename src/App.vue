<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MyHeader from '@/components/UI/MyHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/UI/Drawer.vue'
import Modal from '@/components/UI/Modal.vue'
import Login from '@/components/Login.vue'
import store from '@/store/store.js'


const products = ref([])
const modalLoginVisible = ref(false)
const drawerVisible = ref(false)
// const isAuthenticated = ref(localStorage.isAuthenticated)
// let userToken = ref(localStorage.userToken || false)

const showLoginModal = () => {
  modalLoginVisible.value = true
}

const showDrawer = () => {
  drawerVisible.value = true
}

// const login = (token) => {
//   isAuthenticated.value = true
//   userToken.value = token
//   localStorage.isAuthenticated = true
//   localStorage.userToken = token
// }
//
// const logout = () => {
//   isAuthenticated.value = false
//   userToken.value = ''
//   localStorage.clear()
// }


onMounted(async () => {
  try {
    const response = await axios.get(store.state.API_URL + 'products')
    const data = response.data.data
    products.value = data
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <div id="app">
    <MyHeader
      @showLoginModal="showLoginModal"
      @showDrawer="showDrawer" />
    <CardList :products="products"> Каталог товаров</CardList>
    <Modal v-model:show="modalLoginVisible">
      <Login
        @closeModal="modalLoginVisible = false" />
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

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MyHeader from '@/components/UI/MyHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/UI/Drawer.vue'
import Modal from '@/components/UI/Modal.vue'
import Login from '@/components/Login.vue'
import store from '@/store/store.js'

const modalLoginVisible = ref(false)
const drawerVisible = ref(false)

const showLoginModal = () => {
  modalLoginVisible.value = true
}

const showDrawer = () => {
  drawerVisible.value = true
}

</script>

<template>
  <div id="app">
    <MyHeader
      @show-login-modal="showLoginModal"
      @show-drawer="showDrawer" />
    <router-view></router-view>
    <Modal v-model:show="modalLoginVisible">
      <Login
        @close-modal="modalLoginVisible = false" />
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

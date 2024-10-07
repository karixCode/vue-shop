<script setup>
import { ref } from 'vue'
import MyHeader from '@/components/MyHeader.vue'
import Drawer from '@/components/UI/MyDrawer.vue'
import Modal from '@/components/UI/MyModal.vue'
import LoginModal from '@/components/LoginAndRegister/LoginModal.vue'

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
    <div class="container">
      <MyHeader @show-login-modal="showLoginModal" @show-drawer="showDrawer" />
      <router-view></router-view>
      <Modal v-model:show="modalLoginVisible">
        <LoginModal />
      </Modal>
      <Drawer v-model:show="drawerVisible" />
    </div>
    <footer>
      &copy;2024
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: calc(100vh - 120px);
}

a {
  text-decoration: none;
  color: #5c5c5c;
  transition: 0.3s;
}

a:hover {
  color: #9dd458;
}

footer {
  text-align: center;
  color: #fff;
  background-color: #1c1c1c;
  margin-top: 40px;
  padding: 30px 0;
  width: 100%;
}
</style>

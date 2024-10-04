<script setup>
import { defineEmits } from 'vue'
import store from '@/store/store.js'

// const props = defineProps({
//   isAuthenticated: {
//     type: Boolean,
//     default: false
//   }
// })

const emit = defineEmits(['showLoginModal', 'showDrawer'])

const showLoginModal = () => {
  emit('showLoginModal')
}

const showDrawer = () => {
  emit('showDrawer')
}

</script>

<template>
  <header class="header">
    <h1 class="header__logo logo">Просто купить</h1>
    <nav class="header__nav" v-if="store.state.isAuthenticated">
      <a class="header__link" @click.prevent="showDrawer"><b>{{ store.getters['basketStore/getSummuryPrice'] }} руб.</b></a>
      <a class="header__link" href="" @click.prevent="$router.push(`posts/orders`)"><b>Заказы</b></a>
      <a class="header__link" @click.prevent="store.dispatch('logout')"><b>Выйти</b></a>
    </nav>
    <nav class="header__nav" v-else>
      <a class="header__link" @click.prevent="showLoginModal"><b>Войти</b></a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaeaea;
  width: 100%;
  padding: 20px 0;
}

.logo {
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__link {
  cursor: pointer;
}
</style>

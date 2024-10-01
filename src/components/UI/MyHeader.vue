<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['showModal', 'showDrawer'])

const showModal = () => {
  emit('showModal')
}

const showDrawer = () => {
  emit('showDrawer')
}
</script>

<template>
  <header class="header">
    <h1 class="header__logo logo">Просто купить</h1>
    <nav class="header__nav">
      <a class="header__link" @click.prevent="showDrawer"><b>1205 руб.</b></a>
      <a class="header__link" href="" @click.prevent><b>Заказы</b></a>
      <a class="header__link" @click.prevent="showModal"><b>Войти</b></a>
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
  gap: 15px;
}

.header__link {
  cursor: pointer;
}
</style>

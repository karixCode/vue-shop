<script setup>
import { computed } from 'vue'
import store from '@/store/store.js'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const urlImage = computed(() => {
  return `http://lifestealer86.ru/public/${props.product.image}`
})
</script>

<template>
  <div class="drawer__item">
    <div class="drawer__image">
      <img src="http://lifestealer86.ru/public/img/fe055ca1-0613-4038-a275-2440aff13f8d.webp" />
    </div>
    <div class="drawer__content">
      <p class="drawer__content-title">{{ props.product.name }}</p>
      <p class="drawer__price"><b>{{ props.product.price }} руб.</b></p>
    </div>
    <div
      class="drawer__cross"
      @click="store.dispatch('basketStore/removeProductFromAPI', props.product.id)">
      <img src="/cross.svg" />
    </div>
  </div>
</template>

<style scoped>
  .drawer__item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    max-width: 325px;
    transition: all .3s;
  }

  .drawer__item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .drawer__image {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drawer__image img {
    width: 100%;
  }

  .drawer__content-title {
  }

  .drawer__price {
    margin-top: 8px;
  }

  .drawer__cross {
    position: absolute;
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    right: 15px;
  }
</style>
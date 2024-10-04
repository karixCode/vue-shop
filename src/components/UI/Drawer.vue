<script setup>
import Button from '@/components/UI/Button.vue'
import DrawerItem from '@/components/UI/DrawerItem.vue'
import store from '@/store/store.js'
import { defineEmits } from 'vue'
import basketStore from '@/store/BasketStore.js'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show']);

const closeDrawer = () => {
  emit('update:show', false);
};
</script>

<template>
  <div class="overlay" v-if="props.show" @click="closeDrawer">
    <div class="drawer" v-if="props.show" @click.stop>
      <div class="drawer__header">
        <svg @click="closeDrawer"
             class="drawer__back" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2 class="drawer__title">Корзина</h2>
      </div>
      <div class="drawer__info" v-if="store.state.basketStore.productsInBasket.length === 0">
        <h2>Корзина пуста</h2>
      </div>
      <div class="drawer__content" v-else>
        <div class="drawer__list">
          <DrawerItem
            v-for="product in store.state.basketStore.productsInBasket"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="drawer__bottom">
          <div class="drawer__row">
            <span>Итого:</span>
            <div class="drawer__dash" />
            <span><b>{{ store.getters['basketStore/getSummuryPrice'] }} руб.</b></span>
          </div>
          <Button> Оформить заказ</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}

.drawer {
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  padding: 30px;
  height: 100vh;
  width: 400px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.drawer__header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.drawer__back {
  transform: rotate(180deg) translateX(0);
  opacity: .3;
  cursor: pointer;
  transition: all .3s;
}

.drawer__back:hover {
  opacity: 1;
  transform: rotate(180deg) translateX(4px);
}

.drawer__info {
  margin: auto;
}

.drawer__content {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.drawer__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
}

.drawer__bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.drawer__row {
  display: flex;
}

.drawer__dash {
  flex-grow: 1;
  border-bottom: 1px dashed #dfdfdf;
}
</style>

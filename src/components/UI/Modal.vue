<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show']);

const closeModal = () => {
  emit('update:show', false);
};
</script>

<template>
  <div class="modal" v-if="props.show" @click="closeModal">
    <div @click.stop class="modal__content">
      <img class="modal__cross" src="/cross.svg" alt="cross" @click="closeModal" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
}

.modal__content {
  position: relative;
  margin: auto;
  background: white;
  border-radius: 15px;
  min-height: 400px;
  max-width: 520px;
  width: 100%;
}

.modal__cross {
  position: absolute;
  top: 70px;
  right: 7px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 20;
}

</style>
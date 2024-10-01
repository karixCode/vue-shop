<script setup>

import Button from '@/components/UI/Button.vue'
import { reactive, ref } from 'vue'

const activeTab = ref('login')
const loginData = reactive({
  login: '',
  password: ''
})

const signupData = reactive({
  name: '',
  login: '',
  password: ''
})

const setActiveTab = (tab) => {
  activeTab.value = tab
  loginData.login = loginData.password = ''
  signupData.name = signupData.login = signupData.password = ''
}
</script>

<template>
  <div class="modal__header">
    <div
      :class="['modal__tab', 'modal__login', { modal__active: activeTab === 'login' }]"
      @click="setActiveTab('login')"
    >
      <span>Вход</span>
    </div>
    <div
      :class="['modal__tab', 'modal__signup', { modal__active: activeTab === 'signup' }]"
      @click="setActiveTab('signup')"
    >
      <span>Регистрация</span>
    </div>
  </div>

  <form
    class="modal__form modal__form-login"
    v-if="activeTab === 'login'"
    @click.prevent="submitLogin">
    <label class="modal__label"
    >Логин
      <input
        class="modal__input"
        type="email"
        placeholder="email"
        required
        v-model="loginData.login"/>
    </label>
    <label class="modal__label"
    >Пароль
      <input
        class="modal__input"
        type="password"
        placeholder="password"
        required
        v-model="loginData.password"/>
    </label>
    <Button class="modal__button">Войти</Button>
  </form>

  <form
    class="modal__form modal__form-signup"
    v-else
    @click.prevent="submitSignup">
    <label class="modal__label"
    >ФИО
      <input
        class="modal__input"
        type="text"
        placeholder="Фамилия Имя Отчество"
        required
        v-model="signupData.name"/> </label
    ><label class="modal__label"
  >Логин
    <input
      class="modal__input"
      type="email"
      placeholder="Email"
      required
      v-model="signupData.login"/>
  </label>
    <label class="modal__label"
    >Пароль
      <input
        class="modal__input"
        type="password"
        placeholder="Пароль"
        required
        v-model="signupData.password"/>
    </label>
    <Button class="modal__button">Зарегестрироваться</Button>
  </form>
</template>

<style scoped>

.modal__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60px;
}

.modal__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}

.modal__active {
  background-color: #fff;
  box-shadow: none;
}

.modal__login {
  border-radius: 15px 0 0 0;
}

.modal__signup {
  border-radius: 0 15px 0 0;
}
.modal__form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.modal__label {
  display: flex;
  gap: 5px;
  flex-direction: column;
}

.modal__input {
  width: 100%;
  padding: 10px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 14px;
}

.modal__button {
  margin-top: 10px;
}
</style>
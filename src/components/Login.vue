<script setup>
import Button from '@/components/UI/Button.vue'
import { reactive, ref, defineEmits } from 'vue'
import axios from 'axios'
import store from '@/store/store.js'

const activeTab = ref('login')
const showMessageLogin = ref(false)

const loginData = reactive({
  login: '',
  password: ''
})

const signupData = reactive({
  fio: '',
  login: '',
  password: ''
})

const setActiveTab = (tab) => {
  activeTab.value = tab
  loginData.login = loginData.password = ''
  signupData.name = signupData.login = signupData.password = ''
  showMessageLogin.value = false
}

const emit = defineEmits(['closeModal', 'login']);

const closeModal = () => {
  emit('closeModal');
}
const submitLogin = async () => {
  try {
    const { data } = await axios.post('http://lifestealer86.ru/public/api-shop/login', {
      email: loginData.login,
      password: loginData.password
    })

    store.dispatch('login', data.data.user_token)
    // emit('login', data.data.user_token)

    loginData.login = loginData.password = ''
    closeModal()
  } catch (err) {
    console.error(err)
  }
}

const submitSignup = async () => {
  try {
    const data = await axios.post('http://lifestealer86.ru/public/api-shop/signup', {
      fio: signupData.fio,
      email: signupData.login,
      password: signupData.password
    })

    signupData.fio = signupData.login = signupData.password = ''

    setActiveTab('login')
    showMessageLogin.value = true

  } catch (err) {
    console.error(err)
  }
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
  <div  class="modal__message" :class="{ 'show-block': !showMessageLogin}">
    <p>Вы успешно зарегестрировались, войдите в аккаунт</p>
  </div>
  <form
    class="modal__form modal__form-login"
    v-if="activeTab === 'login'"
    @submit.prevent="submitLogin"
  >
    <label class="modal__label"
      >Логин
      <input
        class="modal__input"
        type="email"
        placeholder="Email"
        required
        v-model="loginData.login"
      />
    </label>
    <label class="modal__label"
      >Пароль
      <input
        class="modal__input"
        type="password"
        minlength="6"
        placeholder="Пароль"
        required
        v-model="loginData.password"
      />
    </label>
    <Button class="modal__button">Войти</Button>
  </form>

  <form class="modal__form modal__form-signup" v-else @submit.prevent="submitSignup">
    <label class="modal__label"
      >ФИО
      <input
        class="modal__input"
        type="text"
        placeholder="Фамилия Имя Отчество"
        required
        v-model="signupData.fio"
      /> </label
    ><label class="modal__label"
      >Логин
      <input
        class="modal__input"
        type="email"
        placeholder="Email"
        required
        v-model="signupData.login"
      />
    </label>
    <label class="modal__label"
      >Пароль
      <input
        class="modal__input"
        type="password"
        placeholder="Пароль"
        minlength="6"
        required
        v-model="signupData.password"
      />
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

.show-block {
  display: none;
}

.modal__message {
  padding: 0 20px;
  margin-top: 30px;
}

.modal__message p {
  text-align: center;
  width: 100%;
  border: 2px solid #70953e;
  border-radius: 14px;
  background-color: #acd38b;
  padding: 5px 10px;
}

.modal__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.5);
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
  border: 1px solid #0005;
  border-radius: 14px;
}

.modal__input:invalid {
  outline: 1px solid red;
}

.modal__input:valid {
  outline: 1px solid #9dd458;
}

.modal__button {
  margin-top: 10px;
}
</style>
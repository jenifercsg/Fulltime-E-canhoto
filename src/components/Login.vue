<template>
    <div class="containerLogin mx-auto">
      <div class="containerInfos container-user">
        <div class="logo">
          <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
        </div>
        <div class="inputsLogin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="user.email"
              @input="hideLabel('floatingInputLabel')"
            />
            <label for="floatingInput" id="floatingInputLabel">{{ t('auth.email') }}</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="user.password"
              @input="hideLabel('floatingPasswordLabel')"
            />
            <label for="floatingPassword" id="floatingPasswordLabel">{{ t('auth.password') }}</label>
          </div>
          <a class="text-decoration-none" href="#">
            <p class="p-2">{{ t('auth.forgot') }}</p>
          </a>
        </div>
  
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
  
        <div class="d-flex col-lg-12">
          <RouterLink to="/home" id="btnLogin" class="btn btn-sm w-75 d-flex justify-content-center" @click.prevent="login">
            {{ t('auth.login') }}
          </RouterLink>
          <RouterLink to="/" id="btnLogin" class="btn btn-sm w-25 ms-2 d-flex justify-content-center">
            {{ t('auth.back') }} <i class='bx bx-undo'></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import http from '@/http-common';
  import { useAuth } from '@/stores/auth.js';
  import { useI18n } from '@/locales/index.js';
  
  const auth = useAuth();
  const { t } = useI18n();
  const router = useRouter();
  
  const user = reactive({
    email: '',
    password: '',
  });
  
  const errorMessage = ref('');
  
  async function login() {
    try {
      const { data } = await http.post('/Users/authenticate', user);
      auth.setToken(data.token);
      auth.setUser(data.user);
      errorMessage.value = ''; 
      await router.push('/home');
    } catch (error) {
      errorMessage.value = t('auth.invalid');
    }
  }
  
  function hideLabel(labelId) {
    const label = document.getElementById(labelId);
    if (label) {
      label.classList.add('hidden-label');
    }
  }
  </script>
  
  <style scoped>
  .hidden-label {
    display: none;
  }
  .alert-danger {
    color: red;
  }
  </style>
  

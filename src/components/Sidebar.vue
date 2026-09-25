<template>
  <nav class="sidebar">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="@/assets/img/full-time-ecanhoto-logo-2.png" alt="logo">
        </span>
      </div>

      <i class="bx bx-chevron-right toggle"></i>
    </header>

    <div class="menu-bar">
      <div class="menu">
        <li class="nav-link active-canhoto">
          <i class='bx bx-plus-medical icon active-canhoto'></i>
          <span @click="$emit('newCanhoto')" class="text nav-text active-canhoto">{{ $t('sidebar.newReceipt') }}</span>
        </li>

        <li :class="{ 'nav-link': true, active: isActive('/home') }">
          <RouterLink to="/home">
            <i class="bx bxs-home icon"></i>
            <span class="text nav-text">{{ $t('sidebar.dashboard') }}</span>
          </RouterLink>
        </li>

        <li :class="{ 'nav-link': true, active: isActive('/canhotos') }">
          <RouterLink to="/canhotos">
            <i class="bx bxs-spreadsheet icon"></i>
            <span class="text nav-text">{{ $t('sidebar.receipts') }}</span>
          </RouterLink>
        </li>

        <li v-if="!this.userAdmin" :class="{ 'nav-link': true, active: isActive('/colaboradores') }">
          <RouterLink to="/colaboradores">
            <i class="bx bxs-user icon"></i>
            <span class="text nav-text">{{ $t('sidebar.collaborators') }}</span>
          </RouterLink>
        </li>
      </div>

      <div class="bottom-content mb-5">
        <li class="nav-link">
          <RouterLink to="/login">
            <i class="bx bx-log-out icon"></i>
            <span class="text nav-text" @click="logout">{{ $t('sidebar.logout') }}</span>
          </RouterLink>
        </li>
      </div>

      <div class="sidebar-language">
        <label class="visually-hidden" for="sidebar-language-select">{{ $t('language') }}</label>
        <select id="sidebar-language-select" :value="locale" @change="setLocale($event.target.value)">
          <option v-for="language in locales" :key="language" :value="language">
            {{ language === 'pt-BR' ? 'PT' : language === 'en-US' ? 'EN' : 'ES' }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuth } from '@/stores/auth';
import { useI18n } from '@/locales/index.js';

export default {
  setup() {
    return useI18n();
  },
  data() {
    return {
      userAdmin: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    logout() {
      const auth = useAuth();
      auth.clear();
      // window.location = '/location'
    },
    getDados() {

      const auth = useAuth();

      auth.getUser().then(response => {

        var responseUser = JSON.parse(response);
        this.userAdmin = responseUser.isAdmin;
      });
    }
  },
  mounted() {
    this.getDados();
  }
}
</script>

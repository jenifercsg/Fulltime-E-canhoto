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
          <span @click="$emit('newCanhoto')" class="text nav-text active-canhoto">Novo Canhoto</span>
        </li>

        <li :class="{ 'nav-link': true, active: isActive('/home') }">
          <RouterLink to="/home">
            <i class="bx bxs-home icon"></i>
            <span class="text nav-text">Dashboard</span>
          </RouterLink>
        </li>

        <li :class="{ 'nav-link': true, active: isActive('/canhotos') }">
          <RouterLink to="/canhotos">
            <i class="bx bxs-spreadsheet icon"></i>
            <span class="text nav-text">Canhotos</span>
          </RouterLink>
        </li>

        <li v-if="!this.userAdmin" :class="{ 'nav-link': true, active: isActive('/colaboradores') }">
          <RouterLink to="/colaboradores">
            <i class="bx bxs-user icon"></i>
            <span class="text nav-text">Colaboradores</span>
          </RouterLink>
        </li>
      </div>

      <div class="bottom-content mb-5">
        <li class="nav-link">
          <RouterLink to="/login">
            <i class="bx bx-log-out icon"></i>
            <span class="text nav-text" @click="logout">Logout</span>
          </RouterLink>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuth } from '@/stores/auth';

export default {
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

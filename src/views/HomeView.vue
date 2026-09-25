<script setup>
import HomeSite from '../components/Home.vue';
import '@/assets/style/home.css';
import { onMounted, ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const homeSiteRef = ref(null);

onMounted(() => {
    const body = document.querySelector("body");
    const sidebar = body?.querySelector(".sidebar");
    const toggle = body?.querySelector(".toggle");

    if (!sidebar || !toggle) return;

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
});

function handleNewCanhoto() {
    if (homeSiteRef.value) {
        homeSiteRef.value.newCanhoto();
    }
}

</script>

<template>
  <main>
    <Sidebar @newCanhoto="handleNewCanhoto" />
    <HomeSite ref="homeSiteRef" />
  </main>
</template>

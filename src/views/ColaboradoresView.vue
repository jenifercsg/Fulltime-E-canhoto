<script setup>
import Colaboradores from '@/components/Colaboradores.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/style/home.css';
import {onMounted, reactive, ref} from "vue";
const colaboradoresRef = ref(null);

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
    if (colaboradoresRef.value) {
      colaboradoresRef.value.newCanhoto();
    }
}

</script>

<template>
  <main>
    <Sidebar @newCanhoto="handleNewCanhoto" />
    <Colaboradores ref="colaboradoresRef" />
  </main>
</template>

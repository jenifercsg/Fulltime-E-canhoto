<script setup>
import Canhoto from '../components/Canhotos.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/style/home.css';
import '@/assets/style/canhoto.css';
import {onMounted, reactive, ref} from "vue";

const canhotoRef = ref(null);

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
    if (canhotoRef.value) {
      canhotoRef.value.newCanhoto();
    }
}

</script>

<template>
  <main>
    <Sidebar @newCanhoto="handleNewCanhoto" />
    <Canhoto ref="canhotoRef" />
  </main>
</template>

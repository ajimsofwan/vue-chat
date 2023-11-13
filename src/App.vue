<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <section class="flex flex-col min-h-screen px-5 py-10 text-center">
    <div>
      <h1 class="text-4xl font-bold"><span class="text-primary">Vue</span>Chat</h1>
      <router-view />
    </div>
    <div class="mt-auto">&copy; 2023 VueChat. </div>
  </section>
</template>

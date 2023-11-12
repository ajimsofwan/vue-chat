<script setup>
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
</script>

<template>
  <div class="max-w-4xl py-10 mx-auto text-left">
    <div class="p-6 bg-white border border-gray-200 shadow-lg rounded-3xl dark:bg-gray-800 dark:border-gray-700">
      <Navbar />
      <NewChatForm />
    </div>
  </div>
</template>
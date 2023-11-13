<script setup>
import ChatWindow from '../components/ChatWindow.vue';
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
</script>

<template>
  <div class="max-w-4xl py-10 mx-auto text-left">
    <div class="bg-white border border-slate-200 shadow-lg rounded-3xl dark:bg-slate-800 dark:border-slate-700">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';
import { timestamp } from '../firebase/config';

const { user } = getUser()
const { addDoc, error } = useCollection('messages')

const message = ref('')

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp()
  }
  await addDoc(chat)
  if (!error.value) {
    message.value = ''
  }
}

</script>

<template>
  <div class="px-6 py-2 mx-auto text-left">
    <div v-if="error" class="p-4 mb-4 text-sm text-red-800 rounded-xl bg-red-50 dark:bg-slate-800 dark:text-red-400"
      role="alert">
      <span class="font-medium">Oops!</span> {{ error }}
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="w-full">
        <textarea @keydown.enter.exact.prevent="handleSubmit" @keydown.enter.shift.exact.prevent="message += '\n'"
          id="message" v-model="message" placeholder="Type message here..."
          class=" text-slate-900 text-sm rounded-xl focus:outline-none block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          required></textarea>
      </div>
    </form>
  </div>
</template>
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
  <div class="py-10 mx-auto text-left">
    <div v-if="error" class="p-4 mb-4 text-sm text-red-800 rounded-xl bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert">
      <span class="font-medium">Oops!</span> {{ error }}
    </div>
    <form @submit.prevent="handleSubmit" class="flex items-center justify-between">
      <div class="w-full mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea @keydown.enter.exact.prevent="handleSubmit" @keydown.enter.shift.exact.prevent="message += '\n'"
          id="message" v-model="message"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          required></textarea>
      </div>
      <div class="ml-3"><button type="submit"
          class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-xl text-sm px-5 py-2.5 text-center">
          Send
        </button></div>
    </form>
  </div>
</template>
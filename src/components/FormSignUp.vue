<script setup>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp';
const emit = defineEmits(['show'])
const { signUp, error } = useSignUp()

const displayName = ref('')
const username = ref('')
const password = ref('')

const handleSubmit = async () => {
  await signUp(email.value, password.value, displayName.value)
}

</script>
<template>
  <div class="max-w-md py-10 mx-auto text-left">
    <h1 class="py-4 text-3xl font-bold text-center">Sign Up</h1>
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label for="displayName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display
            Name</label>
          <input type="text" id="displayName" v-model="displayName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <div class="mb-6">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" id="username" v-model="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" id="password" v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <button type="submit"
          class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
          Sign Up
        </button>
        <div class="py-5">Have an account? <span class="font-semibold cursor-pointer hover:border-b border-slate-700"
            @click="emit('show')">Sign In</span>
        </div>
      </form>
    </div>
  </div>
</template>
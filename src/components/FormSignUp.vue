<script setup>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp';
const emit = defineEmits(['show', 'signup'])
const { signUp, error } = useSignUp()

const displayName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await signUp(email.value, password.value, displayName.value)
  if (!error.value) {
    emit('signup')
  }
}

</script>
<template>
  <div class="max-w-md py-10 mx-auto text-left">
    <h1 class="py-4 text-3xl font-bold text-center">Sign Up</h1>
    <div class="p-6 bg-white border border-slate-200 shadow rounded-2xl dark:bg-slate-800 dark:border-slate-700">
      <div v-if="error" class="p-4 mb-4 text-sm text-red-800 rounded-xl bg-red-50 dark:bg-slate-800 dark:text-red-400"
        role="alert">
        <span class="font-medium">Oops!</span> {{ error }}
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label for="displayName" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Display
            Name</label>
          <input type="text" id="displayName" v-model="displayName"
            class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Email</label>
          <input type="email" id="email" v-model="email"
            class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Password</label>
          <input type="password" id="password" v-model="password"
            class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <button type="submit"
          class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center">
          Sign Up
        </button>
        <div class="py-5">Have an account? <span class="font-semibold cursor-pointer hover:border-b border-slate-700"
            @click="emit('show')">Sign In</span>
        </div>
      </form>
    </div>
  </div>
</template>
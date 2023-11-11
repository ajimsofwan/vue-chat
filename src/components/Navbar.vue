<script setup>
import useSignOut from '../composables/useSignOut';
import { useRouter } from 'vue-router';

const { signOut, error } = useSignOut()
const router = useRouter()

const handleClick = async () => {
  await signOut()
  if (!error.value) {
    router.push({ name: 'Home' })
  }
}
</script>

<template>
  <nav class="flex justify-between">
    <div>
      <p>Hey there.. user</p>
      <p>Currently signed in as email</p>
    </div>
    <div>
      <button @click="handleClick"
        class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-xl text-sm px-5 py-2.5 text-center">
        Sign Out
      </button>
    </div>
  </nav>
</template>
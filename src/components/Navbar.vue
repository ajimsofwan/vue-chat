<script setup>
import useSignOut from '../composables/useSignOut';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const { user } = getUser()
const { signOut, error } = useSignOut()
const router = useRouter()

const handleClick = async () => {
  await signOut()
  // if (!error.value) {
  //   router.push({ name: 'Home' })
  // }
}
watch(user, () => {
  if (!user.value) {
    router.push({ name: 'Home' })
  }
})
</script>

<template>
  <nav v-if="user" class="flex flex-wrap p-6 sm:justify-between">
    <div class="mb-3">
      <p>Hey there {{ user.displayName }}</p>
      <p class="text-slate-500">Currently signed in as {{ user.email }}</p>
    </div>
    <div class="w-full sm:w-auto">
      <button @click="handleClick"
        class="text-white bg-primary w-full sm:w-auto hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-xl text-sm px-5 py-2.5 text-center">
        Sign Out
      </button>
    </div>
  </nav>
</template>
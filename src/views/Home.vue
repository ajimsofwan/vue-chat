
<script setup>
import { ref } from 'vue';
import FormSignUp from '../components/FormSignUp.vue';
import FormSignIn from '../components/FormSignIn.vue';
import { useRouter } from 'vue-router';

const formSignIn = ref(true)
const router = useRouter()

const enterChat = () => {
  router.push({ name: 'ChatRoom' })
}

</script>

<template>
  <div v-if="formSignIn">
    <FormSignIn @signin="enterChat" @show="formSignIn = false" />
  </div>
  <div v-else>
    <FormSignUp @signup="enterChat" @show="formSignIn = true" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import FormSignUp from '../components/FormSignUp.vue';
import FormSignIn from '../components/FormSignIn.vue';

const formSignIn = ref('true')
</script>

<template>
  <h1 class="text-4xl font-bold">Home</h1>
  <FormSignUp v-if="formSignIn" @show="formSignIn = false" />
  <FormSignIn v-else @show="formSignIn = true" />
</template>

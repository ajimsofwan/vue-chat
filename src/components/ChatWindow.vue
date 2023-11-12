<script setup>

import getCollection from '../composables/getCollection'

const { documents, error } = getCollection('messages')


</script>

<template>
  <div v-if="documents" class="p-6 mb-1 bg-slate-100">
    <div v-for="doc in documents" :key="doc.id" class="mb-3">
      <div class="text-xs text-slate-400">{{ doc.createdAt.toDate() }}</div>
      <span class="mr-1 font-semibold">{{ doc.name }}:</span>
      <span>{{ doc.message }}</span>
    </div>
  </div>
</template>
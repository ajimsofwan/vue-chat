<script setup>

import { computed } from 'vue';
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

const { documents, error } = getCollection('messages')
const formatedFoduments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      const time = formatDistanceToNow(doc.createdAt.toDate())
      return { ...doc, createdAt: time }
    })
  }
})

</script>

<template>
  <div v-if="formatedFoduments" class="p-6 mb-1 overflow-y-auto max-h-80 bg-slate-100">
    <div v-for="doc in formatedFoduments" :key="doc.id" class="mb-3">
      <div class="text-xs text-slate-400">{{ doc.createdAt }}</div>
      <span class="mr-1 font-semibold">{{ doc.name }}:</span>
      <span>{{ doc.message }}</span>
    </div>
  </div>
</template>
<script setup>

import { computed, onUpdated, ref } from 'vue';
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

// auto scrool
const messages = ref(null)
onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight
})
</script>

<template>
  <div v-if="formatedFoduments" ref="messages" class="p-6 mb-1 overflow-y-auto max-h-80 bg-slate-50 dark:bg-slate-700">
    <div v-for="doc in formatedFoduments" :key="doc.id" class="mb-3">
      <div class="text-xs text-slate-400">{{ doc.createdAt }}</div>
      <span class="mr-1 font-semibold">{{ doc.name }}:</span>
      <span>{{ doc.message }}</span>
    </div>
  </div>
</template>
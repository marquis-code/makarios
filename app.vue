<template>
  <div>
    <ScreenLoader :loading="pageLoading" />
    <AppToast />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCMS } from '@/composables/useCMS'

const { loadCMS } = useCMS()
const pageLoading = ref(true)

onMounted(async () => {
  await loadCMS()
  setTimeout(() => {
    pageLoading.value = false
  }, 1000)
})
</script>

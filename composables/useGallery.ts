import { ref } from 'vue'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useGallery = () => {
  const loading = ref(false)
  const items = ref([])

  const fetchPublicGallery = async () => {
    loading.value = true
    try {
      const res = await GATEWAY_ENDPOINT.get('/gallery/public')
      items.value = res.data
    } catch (error) {
      console.error('Failed to fetch public gallery', error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    items,
    fetchPublicGallery
  }
}

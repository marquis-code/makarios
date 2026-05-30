import { ref } from 'vue'
import { adverts_api } from '@/api_factory/modules/adverts'

export const useAdverts = () => {
    const loading = ref(false)
    const groupedAdverts = ref<Record<string, any[]>>({})

    const fetchAdverts = async () => {
        loading.value = true
        try {
            const res = await adverts_api.getPublicAdverts()
            groupedAdverts.value = res.data?.data || res.data || {}
        } catch (err) {
            console.error('Failed to load adverts', err)
        } finally {
            loading.value = false
        }
    }

    const trackClick = async (id: string, url: string) => {
        try {
            // Fire and forget
            adverts_api.trackClick(id).catch(console.error)
        } finally {
            if (url) window.open(url, '_blank')
        }
    }

    return { loading, groupedAdverts, fetchAdverts, trackClick }
}

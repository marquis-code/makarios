import { ref } from 'vue'
import { sponsors_api } from '@/api_factory/modules/sponsors'

export const useSponsors = () => {
    const loading = ref(false)
    const sponsors = ref<any[]>([])

    const fetchSponsors = async () => {
        loading.value = true
        try {
            const res = await sponsors_api.getPublicSponsors()
            sponsors.value = res.data?.data || res.data || []
        } catch (err) {
            console.error('Failed to load sponsors', err)
        } finally {
            loading.value = false
        }
    }

    return { loading, sponsors, fetchSponsors }
}

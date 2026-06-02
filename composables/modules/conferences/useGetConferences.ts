import { ref } from "vue"
import { conferences_api } from "@/api_factory/modules/conferences"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetConferences = () => {
    const loading = ref(false)
    const conferences = ref([])
    const { showToast } = useCustomToast()

    const getConferences = async () => {
        loading.value = true
        try {
            const res = await conferences_api.getConferences() as any
            conferences.value = res.data.filter((c: any) => c.isVisible !== false)
        } catch (err: any) {
            showToast({ title: "Error", message: "Failed to fetch conferences", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, conferences, getConferences }
}

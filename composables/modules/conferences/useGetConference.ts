import { ref } from "vue"
import { conferences_api } from "@/api_factory/modules/conferences"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetConference = () => {
    const loading = ref(false)
    const conference = ref(null)
    const { showToast } = useCustomToast()

    const getConference = async (id: string) => {
        loading.value = true
        try {
            const res = await conferences_api.getConference(id) as any
            conference.value = res.data
        } catch (err: any) {
            showToast({ title: "Error", message: "Failed to fetch conference", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, conference, getConference }
}

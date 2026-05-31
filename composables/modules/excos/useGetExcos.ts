import { ref } from "vue"
import { excos_api } from "@/api_factory/modules/excos"

export const useGetExcos = () => {
    const loading = ref(false)
    const excos = ref([])

    const getExcos = async () => {
        loading.value = true
        try {
            const res = await excos_api.getAll() as any
            excos.value = res.data || res
        } catch (err: any) {
            console.error("Failed to fetch excos", err)
        } finally {
            loading.value = false
        }
    }

    return { loading, excos, getExcos }
}

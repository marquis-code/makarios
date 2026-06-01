import { ref } from "vue"
import { enquiries_api } from "@/api_factory/modules/enquiries"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useSubmitEnquiry = () => {
    const loading = ref(false)
    const success = ref(false)
    const { showToast } = useCustomToast()

    const payload = ref({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })

    const submitEnquiry = async () => {
        if (!payload.value.fullName || !payload.value.email || !payload.value.message) {
            showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" })
            return null
        }
        loading.value = true
        try {
            const apiPayload = {
               name: payload.value.fullName,
               email: payload.value.email,
               subject: payload.value.subject || 'General Inquiry',
               message: payload.value.message
            }
            const res = await enquiries_api.create(apiPayload) as any
            success.value = true
            showToast({ title: "Success", message: "Your message has been sent!", toastType: "success" })
            payload.value = { fullName: '', email: '', subject: '', message: '' }
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to send message", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, success, payload, submitEnquiry }
}

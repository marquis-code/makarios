import { ref } from "vue"
import { newsletters_api } from "@/api_factory/modules/newsletters"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useNewsletter = () => {
    const loading = ref(false)
    const email = ref('')
    const fullName = ref('')
    const categories = ref([])
    const selectedCategories = ref<string[]>([])
    const { showToast } = useCustomToast()

    const fetchCategories = async () => {
        loading.value = true
        try {
            const res = await newsletters_api.getCategories()
            // Assume res.data contains the array
            categories.value = res.data?.data || res.data || []
        } catch (err: any) {
            showToast({ title: "Error", message: "Failed to load newsletter categories", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    const subscribe = async () => {
        if (!email.value) {
            showToast({ title: "Validation", message: "Please enter your email", toastType: "warning" })
            return
        }
        if (selectedCategories.value.length === 0) {
            showToast({ title: "Validation", message: "Please select at least one newsletter category", toastType: "warning" })
            return
        }
        loading.value = true
        try {
            const res = await newsletters_api.subscribe({ 
                email: email.value, 
                fullName: fullName.value,
                categoryIds: selectedCategories.value 
            })
            
            const data = res.data?.data || res.data
            
            if (data?.paymentUrl) {
                showToast({ title: "Redirecting...", message: "Taking you to secure payment gateway.", toastType: "success" })
                setTimeout(() => {
                    window.location.href = data.paymentUrl
                }, 1000)
            } else {
                showToast({ title: "Subscribed!", message: "You have successfully joined our network.", toastType: "success" })
                email.value = ''
                fullName.value = ''
                selectedCategories.value = []
            }
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, email, fullName, categories, selectedCategories, fetchCategories, subscribe }
}

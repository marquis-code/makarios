import { ref } from "vue"
import { newsletters_api } from "@/api_factory/modules/newsletters"
import { useCustomToast } from "@/composables/core/useCustomToast"
import axios from "axios"

export const useNewsletter = () => {
    const loading = ref(false)
    const email = ref('')
    const fullName = ref('')
    const categories = ref([])
    const selectedCategories = ref<string[]>([])
    const proofFile = ref<File | null>(null)
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

    const uploadFile = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('file', file)
        const config = useRuntimeConfig()
        // Assuming base URL is available, or use relative if proxy is set
        const uploadUrl = config.public.apiBase ? `${config.public.apiBase}/media/upload` : 'https://spsn-backend.onrender.com/api/media/upload'
        
        const response = await axios.post(uploadUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        return response.data.url
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

        const selectedCatsData = categories.value.filter(c => selectedCategories.value.includes(c._id))
        const totalPrice = selectedCatsData.reduce((sum, c) => sum + c.price, 0)

        if (totalPrice > 0 && !proofFile.value) {
            showToast({ title: "Validation", message: "Please upload your proof of payment", toastType: "warning" })
            return
        }

        loading.value = true
        try {
            let proofOfPayment = ''
            if (proofFile.value) {
                showToast({ title: "Uploading", message: "Uploading proof of payment...", toastType: "info" })
                proofOfPayment = await uploadFile(proofFile.value)
            }

            const res = await newsletters_api.subscribe({ 
                email: email.value, 
                fullName: fullName.value,
                categoryIds: selectedCategories.value,
                proofOfPayment
            })
            
            showToast({ title: "Subscribed!", message: "You have successfully subscribed to the newsletter.", toastType: "success" })
            email.value = ''
            fullName.value = ''
            selectedCategories.value = []
            proofFile.value = null
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    const subscribeFooter = async () => {
        if (!email.value) {
            showToast({ title: "Validation", message: "Please enter your email", toastType: "warning" })
            return
        }
        loading.value = true
        try {
            await newsletters_api.subscribe({ 
                email: email.value, 
                categoryIds: [] 
            })
            
            showToast({ title: "Subscribed!", message: "You have successfully joined our mailing list.", toastType: "success" })
            email.value = ''
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, email, fullName, categories, selectedCategories, proofFile, fetchCategories, subscribe, subscribeFooter }
}

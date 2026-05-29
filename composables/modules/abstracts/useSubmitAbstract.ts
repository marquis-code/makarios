import { ref, computed } from "vue"
import { abstracts_api } from "@/api_factory/modules/abstracts"
import { useCustomToast } from "@/composables/core/useCustomToast"
import { GATEWAY_ENDPOINT } from "@/api_factory/axios.config"

export const useSubmitAbstract = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const submissionMode = ref('write') // 'write' or 'upload'
    const selectedFile = ref<File | null>(null)

    const form = ref({
        primaryAuthor: '',
        email: '',
        affiliation: '',
        keywords: '',
        conference: 'THE 2ND INTERNATIONAL CONGRESS 2026 (ABUJA)',
        title: '',
        abstractBody: '',
        fileUrl: ''
    })

    const wordCount = computed(() => {
        if (submissionMode.value === 'upload') return 0
        const text = form.value.abstractBody.trim()
        if (!text) return 0
        return text.split(/\s+/).length
    })

    const keywordArray = computed(() => {
        return form.value.keywords.split(',').map(k => k.trim()).filter(Boolean)
    })

    const handleFileUpload = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                showToast({ title: "Error", message: "File exceeds 5MB limit", toastType: "error" })
                return
            }
            selectedFile.value = file
        }
    }

    const removeFile = () => {
        selectedFile.value = null
    }

    const uploadDocument = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('file', file)
        try {
            const res = await GATEWAY_ENDPOINT.post('/media/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (res?.type === 'ERROR' || res?.status >= 400) {
                 throw new Error(res?.data?.message || 'Upload failed')
            }
            return res.data.url
        } catch (error) {
            throw new Error("Failed to upload document")
        }
    }

    const submitAbstract = async () => {
        if (submissionMode.value === 'write' && (wordCount.value < 150 || wordCount.value > 250)) {
            showToast({ title: "Validation", message: "Abstract must be between 150 and 250 words", toastType: "warning" })
            return null
        }
        if (submissionMode.value === 'upload' && !selectedFile.value) {
            showToast({ title: "Validation", message: "Please select a file to upload", toastType: "warning" })
            return null
        }
        if (!form.value.primaryAuthor || !form.value.title || !form.value.email || !form.value.affiliation) {
             showToast({ title: "Validation", message: "Please fill all required fields", toastType: "warning" })
             return null
        }

        loading.value = true
        try {
            let uploadedFileUrl = ''
            if (submissionMode.value === 'upload' && selectedFile.value) {
                uploadedFileUrl = await uploadDocument(selectedFile.value)
            }

            const payload = {
                ...form.value,
                abstractBody: submissionMode.value === 'write' ? form.value.abstractBody : '',
                fileUrl: uploadedFileUrl,
                keywords: keywordArray.value
            }

            const res = await abstracts_api.create(payload) as any
            if (res?.type === 'ERROR' || res?.status >= 400) {
                showToast({ title: "Submission Failed", message: res?.data?.message || res?.data?.error || "Please check your inputs and try again.", toastType: "error" })
                loading.value = false
                return null
            }
            showToast({ title: "Success", message: "Abstract submitted successfully!", toastType: "success" })
            
            // Reset form
            form.value = { primaryAuthor: '', email: '', affiliation: '', keywords: '', conference: form.value.conference, title: '', abstractBody: '', fileUrl: '' }
            selectedFile.value = null
            
            return res.data
        } catch (err: any) {
            showToast({ title: "Submission Failed", message: err?.response?.data?.message || err.message || "An error occurred", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, form, wordCount, submissionMode, selectedFile, keywordArray, handleFileUpload, removeFile, submitAbstract }
}

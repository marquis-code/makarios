import { useState } from '#app'

type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastOptions {
  title: string
  message: string
  toastType: ToastType
  duration?: number
}

let toastTimer: any = null

export const useCustomToast = () => {
  const toastVisible = useState('toast-visible', () => false)
  const toastData = useState('toast-data', () => ({
    title: '',
    message: '',
    toastType: 'success' as ToastType
  }))

  const showToast = (options: ToastOptions) => {
    const { title, message, toastType, duration = 5000 } = options
    
    toastData.value = { title, message, toastType }
    toastVisible.value = true
    
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      toastVisible.value = false
    }, duration)
  }
  
  return {
    showToast
  }
}

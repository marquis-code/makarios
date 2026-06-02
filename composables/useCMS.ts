import { ref, watch } from 'vue'
import { cms_api } from '@/api_factory/modules/cms'
export const useCMS = () => {
  const cmsConfig = useState('cms_config', () => null)
  const loading = ref(false)
  
  // Try to use i18n, but gracefully handle if it's not available yet
  let currentLocale = ref('en')
  let localeRef = null
  try {
    const { locale } = useI18n()
    localeRef = locale
    currentLocale = locale
  } catch (e) {
    // fallback if used outside component setup
  }

  const loadCMS = async (forceLang?: string) => {
    const langToUse = forceLang || currentLocale.value
    loading.value = true
    try {
      const res = await cms_api.getConfig(langToUse)
      cmsConfig.value = res.data
      return res.data
    } catch (error) {
      console.error('Failed to load CMS:', error)
      return null
    } finally {
      loading.value = false
    }
  }

  // Reload CMS when language changes
  try {
    if (localeRef) {
      watch(localeRef, (newLang) => {
        loadCMS(newLang)
      })
    }
  } catch (e) {}

  return {
    loading,
    cmsConfig,
    loadCMS
  }
}

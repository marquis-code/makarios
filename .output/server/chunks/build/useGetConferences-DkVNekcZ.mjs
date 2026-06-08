import { ref } from 'vue';
import { c as conferences_api } from './conferences-Bq2UpmDq.mjs';
import { a as useCustomToast } from './server.mjs';

const useGetConferences = () => {
  const loading = ref(false);
  const conferences = ref([]);
  const { showToast } = useCustomToast();
  const getConferences = async () => {
    loading.value = true;
    try {
      const res = await conferences_api.getConferences();
      conferences.value = res.data.filter((c) => c.isVisible !== false);
    } catch (err) {
      showToast({ title: "Error", message: "Failed to fetch conferences", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, conferences, getConferences };
};

export { useGetConferences as u };
//# sourceMappingURL=useGetConferences-DkVNekcZ.mjs.map

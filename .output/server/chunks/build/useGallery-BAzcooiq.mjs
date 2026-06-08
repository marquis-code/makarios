import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { ref } from 'vue';
import { G as GATEWAY_ENDPOINT } from './server.mjs';

const ChevronRight = createLucideIcon("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const useGallery = () => {
  const loading = ref(false);
  const items = ref([]);
  const fetchPublicGallery = async () => {
    loading.value = true;
    try {
      const res = await GATEWAY_ENDPOINT.get("/gallery/public");
      items.value = res.data;
    } catch (error) {
      console.error("Failed to fetch public gallery", error);
    } finally {
      loading.value = false;
    }
  };
  return {
    loading,
    items,
    fetchPublicGallery
  };
};

export { ChevronRight as C, useGallery as u };
//# sourceMappingURL=useGallery-BAzcooiq.mjs.map

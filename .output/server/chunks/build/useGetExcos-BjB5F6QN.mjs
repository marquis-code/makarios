import { ref } from 'vue';
import { G as GATEWAY_ENDPOINT } from './server.mjs';

const excos_api = {
  getAll: () => GATEWAY_ENDPOINT.get("/excos")
};
const useGetExcos = () => {
  const loading = ref(false);
  const excos = ref([]);
  const getExcos = async () => {
    loading.value = true;
    try {
      const res = await excos_api.getAll();
      excos.value = res.data || res;
    } catch (err) {
      console.error("Failed to fetch excos", err);
    } finally {
      loading.value = false;
    }
  };
  return { loading, excos, getExcos };
};

export { useGetExcos as u };
//# sourceMappingURL=useGetExcos-BjB5F6QN.mjs.map

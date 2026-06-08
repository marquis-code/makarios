import { G as GATEWAY_ENDPOINT } from './server.mjs';

const conferences_api = {
  getConferences: () => GATEWAY_ENDPOINT.get("/conferences"),
  getConference: (id) => GATEWAY_ENDPOINT.get(`/conferences/${id}`),
  createConference: (payload) => GATEWAY_ENDPOINT.post("/conferences", payload),
  updateConference: (id, payload) => GATEWAY_ENDPOINT.patch(`/conferences/${id}`, payload),
  deleteConference: (id) => GATEWAY_ENDPOINT.delete(`/conferences/${id}`)
};

export { conferences_api as c };
//# sourceMappingURL=conferences-Bq2UpmDq.mjs.map

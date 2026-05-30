import { GATEWAY_ENDPOINT } from '../axios.config'

export const adverts_api = {
    getPublicAdverts: () => GATEWAY_ENDPOINT.get('/adverts/public'),
    trackClick: (id: string) => GATEWAY_ENDPOINT.post(`/adverts/${id}/click`),
}

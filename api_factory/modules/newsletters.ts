import { GATEWAY_ENDPOINT } from '../axios.config'

export const newsletters_api = {
    getCategories: () => GATEWAY_ENDPOINT.get('/newsletters/categories'),
    subscribe: (payload: { email: string, categoryIds: string[], fullName?: string }) => GATEWAY_ENDPOINT.post('/newsletters/subscribe', payload),
    unsubscribe: (email: string) => GATEWAY_ENDPOINT.delete(`/newsletters/${email}`),
}

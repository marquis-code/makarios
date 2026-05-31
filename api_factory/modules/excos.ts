import { GATEWAY_ENDPOINT } from '../axios.config'

export const excos_api = {
    getAll: () => GATEWAY_ENDPOINT.get('/excos'),
}

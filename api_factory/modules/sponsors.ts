import { GATEWAY_ENDPOINT } from '../axios.config'

export const sponsors_api = {
    getPublicSponsors: () => GATEWAY_ENDPOINT.get('/sponsors/public'),
}

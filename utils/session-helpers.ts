import type { SessionInfo } from "@/composables/modules/session/session-manager"

/**
 * Helper function to create session info from API response
 */
export const createSessionInfo = (apiResponse: any): SessionInfo => {
  return {
    userId: apiResponse.userId || apiResponse.user_id,
    createdAt: apiResponse.createdAt || apiResponse.created_at || new Date().toISOString(),
    expiresAt: apiResponse.expiresAt || apiResponse.expires_at,
    ttl: apiResponse.ttl || calculateTTL(apiResponse.expiresAt || apiResponse.expires_at),
  }
}

/**
 * Calculate TTL from expiration date
 */
export const calculateTTL = (expiresAt: string): number => {
  const now = new Date().getTime()
  const expiry = new Date(expiresAt).getTime()
  return Math.max(0, Math.floor((expiry - now) / 1000))
}

/**
 * Check if session info is valid
 */
export const isValidSessionInfo = (sessionInfo: any): sessionInfo is SessionInfo => {
  return (
    sessionInfo &&
    typeof sessionInfo === "object" &&
    typeof sessionInfo.userId === "string" &&
    typeof sessionInfo.createdAt === "string" &&
    typeof sessionInfo.expiresAt === "string" &&
    typeof sessionInfo.ttl === "number"
  )
}

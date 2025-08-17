// Utility functions for debugging encryption/decryption issues

export const debugEncryptedData = (data: any, label = "Data") => {
    console.group(`🔍 Debug: ${label}`)
  
    console.log("Type:", typeof data)
    console.log("Is null/undefined:", data == null)
  
    if (typeof data === "string") {
      console.log("Length:", data.length)
      console.log("First 50 chars:", data.substring(0, 50))
      console.log("Last 50 chars:", data.substring(Math.max(0, data.length - 50)))
  
      // Check if it looks like base64
      const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/
      console.log("Looks like base64:", base64Regex.test(data))
  
      // Try to parse as JSON
      try {
        const parsed = JSON.parse(data)
        console.log("Can parse as JSON:", true)
        console.log("Parsed keys:", Object.keys(parsed))
      } catch {
        console.log("Can parse as JSON:", false)
      }
    } else if (typeof data === "object") {
      console.log("Object keys:", Object.keys(data || {}))
      console.log("Stringified preview:", JSON.stringify(data).substring(0, 100))
    }
  
    console.groupEnd()
  }
  
  export const validateEncryptionPayload = (payload: any): { valid: boolean; errors: string[] } => {
    const errors: string[] = []
  
    if (!payload || typeof payload !== "object") {
      errors.push("Payload is not an object")
      return { valid: false, errors }
    }
  
    const requiredFields = ["iv", "encrypted", "tag", "key"]
  
    for (const field of requiredFields) {
      if (!payload[field]) {
        errors.push(`Missing field: ${field}`)
      } else if (typeof payload[field] !== "string") {
        errors.push(`Field ${field} is not a string`)
      }
    }
  
    return {
      valid: errors.length === 0,
      errors,
    }
  }
  
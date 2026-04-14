// crypto-utils.ts
import CryptoJS from 'crypto-js';

const secretKey = 'your-encryption-key'; // Use a secure key

export const encryptWithJS = (data: string) => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decryptWithJS = (encryptedData: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

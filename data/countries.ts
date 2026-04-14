export type ICountry = {
    name: string;
    dialCode: string;
    code: string;
    flag: string;
    example: string;
    pattern: RegExp;
  }
  
  // Explicitly export Country as a value to avoid runtime "Missing Export" errors
  export const Country = {} as any;
  
  export const countries: ICountry[] = [
    {
      name: 'Afghanistan',
      dialCode: '+93',
      code: 'AF',
      flag: '🇦🇫',
      example: '70 123 4567',
      pattern: /^7\d \d{3} \d{4}$/
    },
    {
      name: 'Albania',
      dialCode: '+355',
      code: 'AL',
      flag: '🇦🇱',
      example: '66 123 4567',
      pattern: /^6\d \d{3} \d{4}$/
    },
    {
      name: 'Algeria',
      dialCode: '+213',
      code: 'DZ',
      flag: '🇩🇿',
      example: '551 234 567',
      pattern: /^5\d{2} \d{3} \d{3}$/
    },
    {
      name: 'Nigeria',
      dialCode: '+234',
      code: 'NG',
      flag: '🇳🇬',
      example: '803 123 4567',
      pattern: /^[789]0[1-9] \d{3} \d{4}$/
    },
    {
      name: 'United States',
      dialCode: '+1',
      code: 'US',
      flag: '🇺🇸',
      example: '(555) 123-4567',
      pattern: /^\(\d{3}\) \d{3}-\d{4}$/
    },
    {
      name: 'United Kingdom',
      dialCode: '+44',
      code: 'GB',
      flag: '🇬🇧',
      example: '7911 123456',
      pattern: /^7\d{3} \d{6}$/
    },
    {
      name: 'Canada',
      dialCode: '+1',
      code: 'CA',
      flag: '🇨🇦',
      example: '(555) 123-4567',
      pattern: /^\(\d{3}\) \d{3}-\d{4}$/
    },
    {
      name: 'Ghana',
      dialCode: '+233',
      code: 'GH',
      flag: '🇬🇭',
      example: '24 123 4567',
      pattern: /^[235]\d \d{3} \d{4}$/
    },
    {
      name: 'South Africa',
      dialCode: '+27',
      code: 'ZA',
      flag: '🇿🇦',
      example: '71 123 4567',
      pattern: /^7\d \d{3} \d{4}$/
    },
    {
      name: 'Kenya',
      dialCode: '+254',
      code: 'KE',
      flag: '🇰🇪',
      example: '712 345678',
      pattern: /^7\d{2} \d{6}$/
    },
    {
      name: 'India',
      dialCode: '+91',
      code: 'IN',
      flag: '🇮🇳',
      example: '98765 43210',
      pattern: /^\d{5} \d{5}$/
    },
    {
      name: 'China',
      dialCode: '+86',
      code: 'CN',
      flag: '🇨🇳',
      example: '131 2345 6789',
      pattern: /^1\d{2} \d{4} \d{4}$/
    },
    {
      name: 'Brazil',
      dialCode: '+55',
      code: 'BR',
      flag: '🇧🇷',
      example: '11 98765-4321',
      pattern: /^\d{2} \d{5}-\d{4}$/
    },
    {
      name: 'Australia',
      dialCode: '+61',
      code: 'AU',
      flag: '🇦🇺',
      example: '412 345 678',
      pattern: /^4\d{2} \d{3} \d{3}$/
    },
    {
      name: 'France',
      dialCode: '+33',
      code: 'FR',
      flag: '🇫🇷',
      example: '06 12 34 56 78',
      pattern: /^0\d \d{2} \d{2} \d{2} \d{2}$/
    },
    {
      name: 'Germany',
      dialCode: '+49',
      code: 'DE',
      flag: '🇩🇪',
      example: '1512 3456789',
      pattern: /^15\d{2} \d{7}$/
    },
    {
      name: 'Russia',
      dialCode: '+7',
      code: 'RU',
      flag: '🇷🇺',
      example: '912 345-67-89',
      pattern: /^9\d{2} \d{3}-\d{2}-\d{2}$/
    },
    {
      name: 'Japan',
      dialCode: '+81',
      code: 'JP',
      flag: '🇯🇵',
      example: '90-1234-5678',
      pattern: /^[789]0-\d{4}-\d{4}$/
    },
    {
      name: 'South Korea',
      dialCode: '+82',
      code: 'KR',
      flag: '🇰🇷',
      example: '10-1234-5678',
      pattern: /^10-\d{4}-\d{4}$/
    },
    {
      name: 'Italy',
      dialCode: '+39',
      code: 'IT',
      flag: '🇮🇹',
      example: '312 345 6789',
      pattern: /^3\d{2} \d{3} \d{4}$/
    }
  ];
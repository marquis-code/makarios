export interface ICountry {
  name: string;
  code: string;
  dialCode: string;
}

export type Country = ICountry;

export const countries: Country[] = [
  { name: 'Nigeria', code: 'NG', dialCode: '+234' },
  { name: 'United States', code: 'US', dialCode: '+1' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
  { name: 'Canada', code: 'CA', dialCode: '+1' }
];

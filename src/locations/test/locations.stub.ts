import { Location } from "../entities/location.entity";
export const locationsStub = (): Location[] => {
  return [
    {country: 'Mexico', city: 'Cancun'},
    {country: 'Kazakhstan', city: 'Almaty'}
  ]
}
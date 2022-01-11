import { Dict } from '../services/load.service'

export class ShippingInfo {
  name: string
  company: string
  street: string
  city: string
  country: string
  admin_area: string
  unit?: string
  postal: string
  phone_num: string
  country_code: string
  email: string
  coords?: Dict<number>

  constructor(
    name?: string,
    company?: string,
    street?: string,
    city?: string,
    country?: string,
    admin_area?: string,
    unit?: string,
    postal?: string,
    phone_num?: string,
    country_code?: string,
    email?: string,
    coords?: Dict<number>
    ) {

    this.name = name ?? ""
    this.company = company ?? ""
    this.street = street ?? ""
    this.city = city ?? ""
    this.country = country ?? ""
    this.admin_area = admin_area ?? ""
    this.postal = postal ?? ""
    this.phone_num = phone_num ?? ""
    this.unit = unit
    this.country_code = country_code ?? ""
    this.email = email ?? ""
    this.coords = coords ?? {
      LONGITUDE: -118.243683,
      LATITUDE: 34.052235
    }
  }
}
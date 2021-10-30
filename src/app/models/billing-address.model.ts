
export class BillingInfo {
  name: string
  company: string
  number: string
  brand: string
  street: string
  city: string
  country: string
  admin_area: string
  unit?: string
  postal: string
  country_code: string

  constructor(
    name?: string,
    company?: string,
    number?: string,
    brand?: string,
    street?: string,
    city?: string,
    country?: string,
    admin_area?: string,
    unit?: string,
    postal?: string,
    country_code?: string

    ) {

    this.name = name ?? ""
    this.company = company ?? ""
    this.number = number ?? ""
    this.brand = brand ?? "VISA"
    this.street = street ?? ""
    this.city = city ?? ""
    this.country = country ?? ""
    this.admin_area = admin_area ?? ""
    this.postal = postal ?? ""
    this.unit = unit
    this.country_code = country_code ?? ""
  }
}
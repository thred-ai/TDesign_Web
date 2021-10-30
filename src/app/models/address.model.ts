export class Address {

    postalCode: string
    streetAddress: string
    unitNumber?: string
    city: string
    adminArea: string
    country: string

    constructor(
      postalCode: string,
      streetAddress: string,
      city: string,
      adminArea: string,
      country: string,
      unitNumber?: string,
    ) {

      this.postalCode = postalCode
      this.streetAddress = streetAddress
      this.city = city
      this.adminArea = adminArea
      this.country = country
      this.unitNumber = unitNumber

    }
}
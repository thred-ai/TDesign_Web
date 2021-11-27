export class Field {

    name: string
    type: number

    constructor(
      name?: string,
      type?: number,
    ) {

      this.name = name ?? ''
      this.type = type ?? 0

    }
}
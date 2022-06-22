export class Plan {

    name: string
    id: string
    price: number
    css: string
    text: string
    available: boolean
    min: number
    max: number

    constructor(
      name?: string,
      id?: string,
      price?: number,
      css?: string,
      text?: string,
      available?: boolean,
      min?: number,
      max?: number,
    ) {
      this.name = name ?? 'THRED CORE PLAN'
      this.id = id ?? ''
      this.price = price ?? 3700
      this.css = css ?? 'gradient',
      this.text = text ?? 'info'
      this.available = available ?? false
      this.min = min ?? 0
      this.max = max ?? 0
    }
}

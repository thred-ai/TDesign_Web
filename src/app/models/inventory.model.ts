import { Dict } from '../services/load.service'

export class Inventory {
  code: string
  name: string
  desc: string
  variations: Array<any>
  category: string
  sizes: Array<string>
  isCustom: boolean
  img: string
  amount: number
  timestamp: Date
  id: string
  autoReload: boolean


  constructor(
    code: string,
    name: string,
    amount: number,
    timestamp: Date,
    id: string,
    autoReload: boolean,
    variations?: Array<any>,
    category?: string,
    desc?: string,
    sizes?: Array<string>,
    isCustom?: boolean,
    img?: string,
    ) {
    this.code = code ?? ""
    this.name = name ?? ""
    this.amount = amount ?? 0
    this.timestamp = timestamp ?? new Date()
    this.id = id ?? ""
    this.autoReload = autoReload ?? false
    this.variations = variations ?? []
    this.category = category ?? ''
    this.sizes = sizes ?? ['E']
    this.isCustom = isCustom ?? true
    this.desc = desc ?? ''
    this.img = img ?? 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Fdefault_inv.png?alt=media'
  }
}
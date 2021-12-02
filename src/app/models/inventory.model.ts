import { Dict } from '../services/load.service'

export class Inventory {
  code: string
  name: string
  img?: string
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
    autoReload: boolean
    ) {
    this.code = code ?? ""
    this.name = name ?? ""
    this.amount = amount ?? 0
    this.timestamp = timestamp ?? new Date()
    this.id = id ?? ""
    this.autoReload = autoReload ?? false
  }
}
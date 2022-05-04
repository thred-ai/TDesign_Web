
export class MarketContract {
  name?: string
  contract?: string
  abi?: string[]
  bytecode?: string


  constructor(
    name?: string,
    contract?: string,
    abi?: string[],
    bytecode?: string,
  ) {
    this.name = name
    this.bytecode = bytecode
    this.abi = abi
    this.contract = contract
  }
}
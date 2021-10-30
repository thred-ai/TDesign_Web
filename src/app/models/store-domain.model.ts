
export class StoreDomain {
  host: string
  protocol: string
  status: number
  txt: string

  fullURL(){
    return this.protocol + "://" + this.host
  }

  constructor(
    host: string,
    protocol: string,
    status: number,
    txt: string
  ) {

    this.host = host ?? ""
    this.protocol = protocol ?? "";
    this.status = status ?? 1;
    this.txt = txt;
  }
}
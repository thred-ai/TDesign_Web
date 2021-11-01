
export class StoreDomain {
  host: string
  protocol: string
  status: number
  txt: string
  fullURL?: string


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
    if (host && protocol){
      this.fullURL = protocol + "://" + host
    }
  }
}
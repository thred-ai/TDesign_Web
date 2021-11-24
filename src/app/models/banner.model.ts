export class Banner {

    text: string
    icon: string
    bg_color: Array<number>
    color: Array<number> 

    constructor(
      text: string,
      icon: string,
      bg_color: Array<number>,
      color: Array<number>,
    ) {

      this.text = text
      this.icon = icon
      this.bg_color = bg_color ?? []
      this.color = color ?? []
    }
}
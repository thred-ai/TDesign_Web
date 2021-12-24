export class Button {

    text_color?: string
    text?: string
    bg_color?: string
    style?: number
    link?: string


    constructor(
      text_color?: string,
      text?: string,
      bg_color?: string,
      style?: number,
      link?: string
    ) {
      this.text_color = text_color ?? 'white'
      this.bg_color = bg_color ?? 'black'
      this.style = style ?? 0
      this.text = text ?? ''
      this.link = link ?? ''
    }
}
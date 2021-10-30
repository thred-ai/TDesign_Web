
export class Color {
    code: string
    display: string
    rgb: Array<number>
    img?: string
    imgBack?: string

    constructor(
      code: string,
      display: string,
      rgb: Array<number>,
      img?: string,
      imgBack?: string
      ) {

      this.code = code
      this.display = display;
      this.rgb = rgb;
      this.img = img;
      this.imgBack = imgBack;
    }
}
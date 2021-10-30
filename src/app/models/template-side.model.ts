
export class TemplateSide {
  name: string
  heightCM: number
  widthCM: number
  widthMultiplier: number
  centerYConst: number
  centerXConst: number

  useReverseAspect: Boolean
  rotation: number

  aspectRatio() {
    if (this.useReverseAspect){
        return this.widthCM / this.heightCM
    }
    return this.heightCM / this.widthCM
  }

  reversedAspectRatio() {
    return this.widthCM / this.heightCM
  } 

  regularAspectRatio() {
    return this.heightCM / this.widthCM
  }

  constructor(
    name: string,
    heightCM: number,
    widthCM: number,
    widthMultiplier: number,
    centerYConst: number,
    centerXConst: number,
    useReverseAspect: Boolean,
    rotation: number

    ) {

    this.name = name
    this.heightCM = heightCM;
    this.widthCM = widthCM;
    this.widthMultiplier = widthMultiplier;
    this.centerYConst = centerYConst;
    this.centerXConst = centerXConst;
    this.useReverseAspect = useReverseAspect;
    this.rotation = rotation;
  }
}
import { Color } from './color.model'
import { TemplateSide } from './template-side.model'

export class Template {
  templateID: string
  templateDisplayName: string
  info: string
  colors: Array<Color>
  sizes: Array<string>
  minPrice: number
  productCode: string
  category: string
  moreInfo: string
  isDiscount: boolean
  supportedSides: Array<TemplateSide>
  extraCost: number
  bulkPrice: number
  bulkUnit: number
  bulkSuggestPrice: number
  onlyBulk: boolean
  has3D: boolean

  constructor(
    templateID?: string,
    templateDisplayName?: string,
    info?: string,
    colors?: Array<Color>,
    sizes?: Array<string>,
    minPrice?: number,
    productCode?: string,
    category?: string,
    moreInfo?: string,
    isDiscount?: boolean,
    supportedSides?: Array<TemplateSide>,
    extraCost?: number,
    bulkPrice?: number,
    bulkUnit?: number,
    bulkSuggestPrice?: number,
    onlyBulk?: boolean,
    has3D?: boolean
    ) {

    this.templateID = templateID ?? ""
    this.templateDisplayName = templateDisplayName ?? "";
    this.info = info ?? "";
    this.colors = colors ?? [];
    this.sizes = sizes ?? [];
    this.minPrice = minPrice ?? 0;
    this.productCode = productCode ?? "ATC1000";
    this.category = category ?? "";
    this.moreInfo = moreInfo ?? "";
    this.isDiscount = isDiscount ?? false;
    this.supportedSides = supportedSides ?? []
    this.extraCost = extraCost ?? 0;
    this.bulkPrice = bulkPrice ?? 0
    this.bulkUnit = bulkUnit ?? 0
    this.bulkSuggestPrice = bulkSuggestPrice ?? 0
    this.onlyBulk = onlyBulk ?? false
    this.has3D = has3D ?? false;
  }
}
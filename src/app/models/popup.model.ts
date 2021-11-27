import { Field } from './field.model'

export class Popup {

    title: string
    description: string
    fields: Array<Field> = []
    trigger?: number
    type?: number
    ctaBtnTitle?: string
    exitBtnTitle?: string

    constructor(
      title?: string,
      description?: string,
      fields?: Array<Field>,
      trigger?: number,
      type?: number,
      ctaBtnTitle?: string,
      exitBtnTitle?: string
    ) {
      this.title = title ?? ''
      this.description = description ?? ''
      this.fields = fields ?? []
      this.trigger = trigger
      this.type = type
      this.ctaBtnTitle = ctaBtnTitle
      this.exitBtnTitle = exitBtnTitle
    }
}
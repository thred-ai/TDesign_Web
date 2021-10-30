import { Dict } from '../services/load.service'

export class Blog {
    uid: string
    blogItems: Array<Dict<any>> = []
    timestamp: Date
    timestampDiff: string
    isAvailable: boolean
    title: string
    coverURl: URL
    blogID: string

    constructor(
      uid?: string,  
      timestamp?: Date, 
      timestampDiff?: string, 
      isAvailable?: boolean,
      title?: string,
      blogItems?: Array<Dict<any>>,
      blogID?: string,
      blogURL?: string
      ) {

      this.uid = uid ?? ""
      this.timestamp = timestamp ?? new Date()
      this.timestampDiff = timestampDiff ?? ""
      this.isAvailable = isAvailable ?? false
      this.title = title ?? "My Blog"
      this.blogItems = blogItems ?? []
      this.blogID = blogID ?? "null"
      if (blogURL){
        this.coverURl = new URL(blogURL as string);
      }
      else{
        this.coverURl = new URL("https://shopmythred.com");
      }
    }
}
import { Row } from './row.model';
import { SEO } from './seo.model';

export class Page {
  name?: string;
  title?: string;
  id?: string;
  url?: string;
  fullscreen?: boolean
  rows?: Array<Row>;
  seo?: SEO

  constructor(
    name?: string,
    title?: string,
    id?: string,
    url?: string,
    rows?: Array<Row>,
    fullscreen?: boolean,
    seo?: SEO
  ) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.url = url;
    this.rows = rows ?? [];
    this.fullscreen = fullscreen ?? false
    this.seo = seo
  }
}

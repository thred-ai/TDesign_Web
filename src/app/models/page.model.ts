import { Row } from './row.model';
import { SEO } from './seo.model';

export class Page {
  name?: string;
  title?: string;
  id?: string;
  url?: string;
  fullscreen?: boolean;
  loader?: boolean
  rows?: Array<Row>;
  seo?: SEO

  constructor(
    name?: string,
    title?: string,
    id?: string,
    url?: string,
    rows?: Array<Row>,
    fullscreen?: boolean,
    loader?: boolean,
    seo?: SEO
  ) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.url = url;
    this.rows = rows ?? [];
    this.fullscreen = fullscreen ?? false
    this.loader = loader ?? true
    this.seo = seo
  }
}

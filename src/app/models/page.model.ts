import { Row } from './row.model';

export class Page {
  name?: string;
  title?: string;
  id?: string;
  url?: string;
  rows?: Array<Row>;

  constructor(
    name?: string,
    title?: string,
    id?: string,
    url?: string,
    rows?: Array<Row>
  ) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.url = url;
    this.rows = rows ?? [];
  }
}

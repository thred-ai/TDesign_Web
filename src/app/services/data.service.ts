import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';

import { Template } from '../models/template.model';
import { TemplateSide } from '../models/template-side.model';
import { Color } from '../models/color.model';
import { Country } from '../models/shipping-country.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  templates: Array<Template> = []
  storeInfo: Store = new Store()
  availableTemplates: Array<Template> = []
  availableCurrencies: Array<Country> = []
  selectedCurrency: Country = new Country()

  data:any = ["hey"];

  
  constructor() { }


}

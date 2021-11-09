import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from "../models/contact"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contactsList: Contact[], searchText: string): Contact | [] {
    console.log('searchText: ', searchText.toLowerCase())
    return [];
  }

}

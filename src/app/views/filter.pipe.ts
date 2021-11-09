import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from "../models/contact"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contactsList: Contact[] | null, searchText: string) {

    if (!contactsList) return []
    if (searchText === '') return contactsList;

    return contactsList?.filter( (item) => {
      const stringSearch = searchText.toLowerCase().replace(/\s+/g, ' ').trim()
      return `${item.name} ${item.surname}`.toLowerCase().includes(stringSearch)

    });
  }

}

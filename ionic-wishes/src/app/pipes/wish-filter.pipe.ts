import { Pipe, PipeTransform } from '@angular/core';

import { List } from '../models/list.model';

@Pipe({
  name: 'wishFilter',
  pure: false
})
export class WishFilterPipe implements PipeTransform {
  transform(arrList: Array<List>, status = true): Array<List> {
    return arrList.filter(list => list.status === status);
  }
}

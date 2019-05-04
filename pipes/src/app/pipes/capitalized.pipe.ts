import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();

    let valueArr = value.split(' ');

    if (all) {
      for (let i in valueArr) {
        valueArr[i] = `${valueArr[i][0].toUpperCase()}${valueArr[i].substr(1)}`;
      }
    } else {
      valueArr[0] = `${valueArr[0][0].toUpperCase()}${valueArr[0].substr(1)}`;
    }

    return valueArr.join(' ');
  }
}

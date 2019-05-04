import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(value: any, active:boolean = true): any {
    let password = value;

    if (active) {
      password = '';
      for (let i = 0; i < value.length; i++) {
        password += '*';
      }
    }

    return password;
  }

}

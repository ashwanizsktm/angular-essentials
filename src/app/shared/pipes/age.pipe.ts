import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let currentYear: any = new Date().getFullYear();
    let userBirth: any = new Date(value).getFullYear();
    let userAge = currentYear - userBirth;
    return userAge;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let type = "";
    if (value < 10) {
      type = "weak";
    } else if (value > 10 && value < 50) {
      type = "medium";
    } else {
      type = "strong";
    }
    return type;

  }

}

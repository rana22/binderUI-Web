import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length> 1){
      if(value === 'INCOME_TAX'){
        return "Income tax";
      }
    }

    return value;
  }

}

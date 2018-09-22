import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreEliminator'
})
export class UnderscoreEliminatorPipe implements PipeTransform {

  transform(value: any, ...args): any {
    if(value.includes("_")){
      let separatedFieldName: any = value.replace(/_/g, " ");
      return separatedFieldName;
    }
    else{
      return value;
    }
  }

}

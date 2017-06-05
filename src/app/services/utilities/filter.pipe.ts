import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let rows:any [] = [];
  	if(value.length > 0 && args.length >0){
  		console.log("this is args ==" + args)
  		value.forEach(
  			c=>{
  				if(this.isStrPresent(c.name, args)){
  					rows.push(c);
  					return;
  				}
  			}
  		)
  	}else{
  		return value;
  	}
    return rows;
  }

  private isStrPresent(value: string, arg: string){
  	return value.toLowerCase().includes(arg.toLocaleLowerCase());
  }

}

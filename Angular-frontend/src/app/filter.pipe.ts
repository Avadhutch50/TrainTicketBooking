import { Pipe, PipeTransform } from '@angular/core';
import { Train } from './Train';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Train[], sNumber:number,searchText?:string):any {
    if(sNumber==undefined&&searchText==undefined)
    {
      return value;
    }
    const trainlist:any[]=[];
    for(let i = 0;i<value.length;i++)
    {
      let trainno:number = value[i].trainNumber;
      let city:string = value[i].source;
      if(sNumber==undefined)
      {
        if(city.toLowerCase().startsWith(searchText.toLowerCase()))
        {
          trainlist.push(value[i]);
        }
      }
      else
      {
        if(trainno==sNumber)
        {
          trainlist.push(value[i]);
        }
      }
    }
    return trainlist;
  }
}

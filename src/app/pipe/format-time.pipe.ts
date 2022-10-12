import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: any): any {
    if (value ? value : 0) {
      return new Date(value * 1000).toISOString().substr(11, 8)
    }
  }

  //Date parse did'nt worked
}

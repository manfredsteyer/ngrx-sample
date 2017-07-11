
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): string {

    let long, short;

    switch(value) {
      case 'Hamburg':
        long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
        short = 'HAM';
        break;
      case 'Graz':
        long = 'Flughafen Graz Thalerhof';
        short = 'GRZ';
        break;
      case 'Stuttgart':
        long = 'Aiport Stuttgart - Manfred Rommel';
        short = 'STR';
        break;
      default:
        long = short = 'ROM';
    }

    if (fmt === 'short') return short;
    return long;
  }
}

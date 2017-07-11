
import { AbstractControl, ValidatorFn } from '@angular/forms';
export class CityValidator {

  static validateCity(c: AbstractControl) {
    if (c.value == 'Graz'
        || c.value == 'Hamburg'
        || c.value == 'Stuttgart'
        || c.value == 'Wien'
    ) {
      return {}
    }

    return {
      city: {
        actual: c.value,
        expected: 'Graz, Hamburg, Suttgart, Wien',
        reason: 42,
        tryAgain: 'never'
      }
    }
  }

  static validateCityWithParams(allowedCities: string[]): ValidatorFn {
    // Array<string> === string[]

    return function(c: AbstractControl){
      if (allowedCities.indexOf(c.value) > -1) {
        return {};
      }
      return {
        cityWithParams: true
      }
    }

  }

}

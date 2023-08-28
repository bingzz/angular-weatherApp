import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureFormat'
})
export class TemperatureFormatPipe implements PipeTransform {
  transform(value: unknown): string {
    if (isNaN(value as number)) return 'N/A'

    return (value as number / 10).toFixed(2) + ' °C'
  }
}

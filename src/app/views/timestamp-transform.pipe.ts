import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampTransform'
})
export class TimestampTransformPipe implements PipeTransform {

  transform(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("it-IT");
  }

}

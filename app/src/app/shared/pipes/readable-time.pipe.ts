import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableTime',
})
export class ReadableTimePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    if (!(value instanceof Date)) value = new Date(value);

    let seconds: number = Math.floor(value.getTime() / 1000);
    let interval: number = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }
}

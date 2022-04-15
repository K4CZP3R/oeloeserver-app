import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'i18next',
  pure: false,
})
export class I18nextPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.translateService.translate(`${value}`);
  }
}

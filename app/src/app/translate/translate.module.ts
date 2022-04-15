import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nextPipe } from './pipes/i18next.pipe';
import { HttpModule } from '../http/http.module';

@NgModule({
  declarations: [I18nextPipe],
  imports: [CommonModule, HttpModule],
  exports: [I18nextPipe],
})
export class TranslateModule {}

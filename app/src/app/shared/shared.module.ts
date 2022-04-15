import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ReadableTimePipe } from './pipes/readable-time.pipe';
import { HttpModule } from '../http/http.module';

@NgModule({
  declarations: [RelativeTimePipe, ReadableTimePipe],
  imports: [CommonModule, HttpModule],
  exports: [CommonModule, RelativeTimePipe, ReadableTimePipe],
})
export class SharedModule {}

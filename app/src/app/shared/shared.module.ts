import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ReadableTimePipe } from './pipes/readable-time.pipe';

@NgModule({
  declarations: [RelativeTimePipe, ReadableTimePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, RelativeTimePipe, ReadableTimePipe],
})
export class SharedModule {}

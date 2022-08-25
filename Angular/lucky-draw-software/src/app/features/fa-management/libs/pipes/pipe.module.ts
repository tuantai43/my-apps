import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPipe } from './location.pipe';
import { TextPipe } from './text.pipe';

const PIPES = [LocationPipe, TextPipe];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES],
})
export class PipeModule {}

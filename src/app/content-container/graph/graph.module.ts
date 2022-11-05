import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [GraphComponent],
  imports: [CommonModule, NgxGraphModule],
  exports: [GraphComponent],
})
export class GraphWorldCupModule {}

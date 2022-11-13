import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [GraphComponent],
  imports: [CommonModule, NgxGraphModule, MatRadioModule],
  exports: [GraphComponent],
})
export class GraphWorldCupModule {}

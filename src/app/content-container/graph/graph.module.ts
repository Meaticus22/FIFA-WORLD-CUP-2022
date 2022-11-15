import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [GraphComponent],
  imports: [
    CommonModule,
    NgxGraphModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [GraphComponent],
})
export class GraphWorldCupModule {}

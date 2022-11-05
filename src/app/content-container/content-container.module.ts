import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphModule } from '@swimlane/ngx-graph';
import { GroupsListModule } from './groups-list/groups-list.module';
import { GraphWorldCupModule } from './graph/graph.module';
import { ContentContainerComponent } from './content-container.component';

@NgModule({
  declarations: [ContentContainerComponent],
  imports: [CommonModule, GraphWorldCupModule, GroupsListModule, GraphModule],
  exports: [ContentContainerComponent],
})
export class ContentContainerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [GroupsListComponent],
  imports: [CommonModule, MatSelectModule, FormsModule],
  exports: [GroupsListComponent],
})
export class GroupsListModule {}

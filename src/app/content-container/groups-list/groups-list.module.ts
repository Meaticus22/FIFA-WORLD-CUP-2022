import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [GroupsListComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatChipsModule,
  ],
  exports: [GroupsListComponent],
})
export class GroupsListModule {}

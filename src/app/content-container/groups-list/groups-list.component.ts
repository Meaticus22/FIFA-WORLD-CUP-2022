import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ContentContainerStore, Group, Team } from '../content-container.store';
@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  @Input() groups: Group[] = [];

  qualified: any[] = [];
  firstPlace = '';
  secondPlace = '';
  groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  constructor(private store: ContentContainerStore) {}

  ngOnInit(): void {}

  onFirstPlaceChange(teamName: string, group: Group) {
    group.firstPlace = teamName;
    this.store.updateGroup(group);
  }

  onSecondPlaceChange(teamName: string, group: Group) {
    group.secondPlace = teamName;
    this.store.updateGroup(group);
  }
}

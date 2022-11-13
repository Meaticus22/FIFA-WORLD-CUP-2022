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

  onFirstPlaceChange(teamId: string, group: Group) {
    group.firstPlace = teamId;
    this.store.updateGroup(group);

    const team = group.teams.find((team) => team.id === teamId) as Team;
    this.store.updateGroupNode({ groupPosition: `${group.id}1`, team });
    //
  }

  onSecondPlaceChange(teamId: string, group: Group) {
    group.secondPlace = teamId;
    this.store.updateGroup(group);

    const team = group.teams.find((team) => team.id === teamId) as Team;
    this.store.updateGroupNode({ groupPosition: `${group.id}2`, team });
  }
}

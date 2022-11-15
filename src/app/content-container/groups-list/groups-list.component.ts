import { Component, Input, OnInit } from '@angular/core';
import { ContentContainerStore, Group, Team } from '../content-container.store';
@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  @Input() groups: Group[] = [];

  constructor(private store: ContentContainerStore) {}

  ngOnInit(): void {}

  onFirstPlaceChange(teamId: string, group: Group) {
    group.firstPlace = teamId;
    this.store.updateGroup(group);
    this.store.updateGroupNodeEffect({ groupPosition: `${group.id}1`, teamId });
    this.store.updateUpstreamNodesOnGroupChange(`${group.id}1`);
  }

  onSecondPlaceChange(teamId: string, group: Group) {
    group.secondPlace = teamId;
    this.store.updateGroup(group);
    this.store.updateGroupNodeEffect({ groupPosition: `${group.id}2`, teamId });
    this.store.updateUpstreamNodesOnGroupChange(`${group.id}2`);
  }
}

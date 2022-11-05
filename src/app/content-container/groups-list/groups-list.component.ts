import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  teams = ['Qatar', 'Ecuador', 'Senegal', 'Netherlands'];

  qualified: any[] = [];
  firstPlace = '';
  secondPlace = '';

  constructor() {}

  ngOnInit(): void {}
}

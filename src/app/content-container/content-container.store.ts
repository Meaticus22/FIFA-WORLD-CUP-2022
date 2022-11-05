// create component atore boilerplate

import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  GROUP_A,
  GROUP_B,
  GROUP_C,
  GROUP_D,
  GROUP_E,
  GROUP_F,
  GROUP_G,
  GROUP_H,
} from './teams';

export interface Team {
  id: string;
  name: string;
  group: string;
  emojiFlag: string;
}
export interface Group {
  teams: Team[];
  firstPlace: string;
  secondPlace: string;
  id: string;
}

export interface BracketsState {
  groups: Group[];
}

export const initialState: BracketsState = {
  groups: [
    { firstPlace: '', secondPlace: '', teams: GROUP_A, id: 'A' },
    { firstPlace: '', secondPlace: '', teams: GROUP_B, id: 'B' },
    { firstPlace: '', secondPlace: '', teams: GROUP_C, id: 'C' },
    { firstPlace: '', secondPlace: '', teams: GROUP_D, id: 'D' },
    { firstPlace: '', secondPlace: '', teams: GROUP_E, id: 'E' },
    { firstPlace: '', secondPlace: '', teams: GROUP_F, id: 'F' },
    { firstPlace: '', secondPlace: '', teams: GROUP_G, id: 'G' },
    { firstPlace: '', secondPlace: '', teams: GROUP_H, id: 'H' },
  ],
};

@Injectable()
export class ContentContainerStore extends ComponentStore<BracketsState> {
  constructor() {
    super(initialState);
  }

  readonly groups$ = this.select((state) => state.groups);

  readonly vm$ = this.select(
    this.groups$,
    (groups): BracketsState => ({
      groups,
    })
  );

  readonly updateGroup = this.updater((state, group: Group) => {
    const groups = state.groups.map((g) => {
      if (g.id === group.id) {
        return group;
      }
      return g;
    });
    console.log('here');
    return {
      ...state,
      groups: groups,
    };
  });
}

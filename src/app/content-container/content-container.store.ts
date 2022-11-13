// create component atore boilerplate

import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Edge, Node } from '@swimlane/ngx-graph';
import { LINKS } from './constants/links';
import { NODES } from './constants/nodes';
import {
  GROUP_A,
  GROUP_B,
  GROUP_C,
  GROUP_D,
  GROUP_E,
  GROUP_F,
  GROUP_G,
  GROUP_H,
} from './constants/teams';

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
  nodes: Node[];
  links: Edge[];
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
  nodes: NODES,
  links: LINKS,
};

@Injectable()
export class ContentContainerStore extends ComponentStore<BracketsState> {
  constructor() {
    super(initialState);
  }

  readonly groups$ = this.select((state) => state.groups);
  readonly nodes$ = this.select((state) => state.nodes);
  readonly links$ = this.select((state) => state.links);

  readonly vm$ = this.select(
    this.groups$,
    this.nodes$,
    this.links$,
    (groups, nodes, links): BracketsState => ({
      groups,
      nodes,
      links,
    })
  );

  readonly updateGroup = this.updater((state, group: Group) => {
    const groups = state.groups.map((g) => {
      if (g.id === group.id) {
        return group;
      }
      return g;
    });

    return {
      ...state,
      groups: groups,
    };
  });

  readonly updateGroupNode = this.updater(
    (state, data: { groupPosition: string; team: Team }) => {
      const nodes = state.nodes.map((n) => {
        if (n.id.includes(data.groupPosition)) {
          if (data.groupPosition.includes('1')) {
            n.data['teamA'] = data.team.name + ' ' + data.team.emojiFlag;
          } else {
            n.data['teamB'] = data.team.name + ' ' + data.team.emojiFlag;
          }
          return n;
        }
        return n;
      });
      return {
        ...state,
        nodes: nodes,
      };
    }
  );
}

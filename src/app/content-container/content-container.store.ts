// create component atore boilerplate

import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Edge, Node } from '@swimlane/ngx-graph';
import { Observable, tap, withLatestFrom } from 'rxjs';
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

  readonly updateNode = this.updater((state, node: Node) => {
    const nodes: Node[] = state.nodes.map((n) => {
      if (n.id === node.id) {
        return node;
      }
      return n;
    });

    return {
      ...state,
      nodes: nodes,
    };
  });

  readonly updateLink = this.updater((state, link: Edge) => {
    const links: Edge[] = state.links.map((l) => {
      if (l.id === link.id) {
        return link;
      }
      return l;
    });

    return {
      ...state,
      links: links,
    };
  });

  readonly updateGroupNodeEffect = this.effect(
    (data$: Observable<{ groupPosition: string; teamId: string }>) =>
      data$.pipe(
        withLatestFrom(this.nodes$, this.groups$),
        tap(([data, nodes, groups]) => {
          const { groupPosition, teamId } = data;
          const team = groups
            .find((g) => groupPosition.includes(g.id))
            ?.teams.find((t) => t.id === teamId);

          const node = nodes.find((n) => n.id.includes(groupPosition)) as Node;
          if (groupPosition.includes('1')) {
            node.data['teamA'] = team?.name + ' ' + team?.emojiFlag;
          } else {
            node.data['teamB'] = team?.name + ' ' + team?.emojiFlag;
          }
          node.data.winner = null;
          this.updateNode(node);
        })
      )
  );

  readonly updatePlayoffNodeEffect = this.effect((node$: Observable<Node>) =>
    node$.pipe(
      withLatestFrom(this.nodes$),
      tap(([node, nodes]) => {
        const targetNode = nodes.find(
          (n) => n.id === node.data.target.id
        ) as Node;
        const target = node.data.target.team;
        const winner = node.data.winner;
        targetNode.data[target] = winner;
        this.updateNode(targetNode);
      })
    )
  );

  readonly updateUpstreamNodesOnGroupChange = this.effect(
    (groupPosition$: Observable<string>) =>
      groupPosition$.pipe(
        withLatestFrom(this.nodes$, this.links$),
        tap(([groupPosition, nodes, links]) => {
          const node = nodes.find((n) => n.id.includes(groupPosition)) as Node;
          this.updateUpstreamNodes(node, nodes, links);
        })
      )
  );

  readonly updateLinksOnGroupChange = this.effect((node: Observable<Node>) =>
    node.pipe(
      withLatestFrom(this.links$),
      tap(([node, links]) => {
        const id = node.id;
        const dataSource = node.data.dataFlow;

        if (dataSource === 'source') {
          const link = links.find((l) => l.source === id) as Edge;
          link.data.color = '#74EDD4';
          this.updateLink(link);
        } else {
          const link = links.find((l) => l.target === id) as Edge;
          link.data.color = '#74EDD4';
          this.updateLink(link);
        }
      })
    )
  );

  private updateUpstreamNodes(node: Node, nodes: Node[], links: Edge[]) {
    this.clearLinkByNodeId(node, links);
    const target = node.data.target.team;
    const upstreamNode = nodes.find(
      (n) => n.id === node.data.target.id
    ) as Node;
    if (upstreamNode) {
      upstreamNode.data[target] = '';
      upstreamNode.data.winner = null;
      this.updateNode(upstreamNode);
      this.updateUpstreamNodes(upstreamNode, nodes, links);
      this.clearLinkByNodeId(upstreamNode, links);
    }
  }

  private clearLinkByNodeId(node: Node, links: Edge[]) {
    const id = node.id;
    const dataSource = node.data.dataFlow;

    if (dataSource === 'source') {
      const link = links.find((l) => l.source === id) as Edge;
      link.data.color = '';
      this.updateLink(link);
    } else {
      const link = links.find((l) => l.target === id) as Edge;
      link.data.color = '';
      this.updateLink(link);
    }
  }
}

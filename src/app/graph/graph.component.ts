import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  links = [
    {
      id: 'a',
      source: 'first',
      target: 'AvsB',
      label: 'is parent of',
    },
    {
      id: 'b',
      source: 'second',
      target: 'AvsB',
      label: 'custom label',
    },
    {
      id: 'c',
      source: 'third',
      target: 'CvsD',
      label: 'is parent of',
    },
    {
      id: 'd',
      source: 'fourth',
      target: 'CvsD',
      label: 'custom label',
    },
    {
      id: 'e',
      source: 'AvsB',
      target: 'semi1',
      label: 'is parent of',
    },
    {
      id: 'f',
      source: 'CvsD',
      target: 'semi1',
      label: 'custom label',
    },
    {
      id: 'g',
      source: 'semi1',
      target: 'final',
      label: 'custom label',
    },
    {
      id: 'h',
      source: 'final',
      target: 'semi2',
      label: 'custom label',
    },
    {
      id: 'i',
      source: 'semi2',
      target: 'EvsF',
      label: 'custom label',
    },
    {
      id: 'j',
      source: 'semi2',
      target: 'GvsH',
      label: 'custom label',
    },
    {
      id: 'k',
      source: 'EvsF',
      target: 'fifth',
      label: 'custom label',
    },
    {
      id: 'l',
      source: 'EvsF',
      target: 'sixth',
      label: 'custom label',
    },
    {
      id: 'm',
      source: 'GvsH',
      target: 'seventh',
      label: 'custom label',
    },
    {
      id: 'n',
      source: 'GvsH',
      target: 'eighth',
      label: 'custom label',
    },
  ];
  nodes = [
    {
      id: 'first',
      label: 'A1 vs B2',
    },
    {
      id: 'second',
      label: 'A2 vs B1',
    },
    {
      id: 'third',
      label: 'C1 vs D2',
    },
    {
      id: 'fourth',
      label: 'C2 vs D1',
    },
    {
      id: 'AvsB',
      label: ' A vs B',
    },
    {
      id: 'CvsD',
      label: 'C vs D',
    },
    {
      id: 'semi1',
      label: 'Semi 1',
    },
    {
      id: 'fifth',
      label: 'E1 vs F2',
    },
    {
      id: 'sixth',
      label: 'E2 vs F1',
    },
    {
      id: 'seventh',
      label: 'G1 vs H2',
    },
    {
      id: 'eighth',
      label: 'G2 vs H1',
    },
    {
      id: 'EvsF',
      label: 'E vs F',
    },
    {
      id: 'GvsH',
      label: 'G vs H',
    },
    {
      id: 'semi2',
      label: 'Semi 2',
    },
    {
      id: 'final',
      label: 'final',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

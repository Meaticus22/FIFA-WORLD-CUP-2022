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
      label: 'A',
    },
    {
      id: 'second',
      label: 'B',
    },
    {
      id: 'third',
      label: 'C',
    },
    {
      id: 'fourth',
      label: 'D',
    },
    {
      id: 'AvsB',
      label: 'AB',
    },
    {
      id: 'CvsD',
      label: 'AB',
    },
    {
      id: 'semi1',
      label: 'AB',
    },
    {
      id: 'fifth',
      label: 'E',
    },
    {
      id: 'sixth',
      label: 'F',
    },
    {
      id: 'seventh',
      label: 'G',
    },
    {
      id: 'eighth',
      label: 'H',
    },
    {
      id: 'EvsF',
      label: 'EF',
    },
    {
      id: 'GvsH',
      label: 'GH',
    },
    {
      id: 'semi2',
      label: 'EF-GH',
    },
    {
      id: 'final',
      label: 'final',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

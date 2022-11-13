import { Edge } from '@swimlane/ngx-graph';

export const LINKS: Edge[] = [
  {
    id: 'aa12',
    source: 'A1vsB2',
    target: 'Cuartos_1',
  },
  {
    id: 'bb13',
    source: 'C1vsD2',
    target: 'Cuartos_1',
  },
  {
    id: 'kg14',
    source: 'E1vsF2',
    target: 'Cuartos_2',
  },
  {
    id: 'et15',
    source: 'G1vsH2',
    target: 'Cuartos_2',
  },
  {
    id: 'jk16',
    source: 'Cuartos_1',
    target: 'Semi_1',
  },
  {
    id: 'aq17',
    source: 'Cuartos_2',
    target: 'Semi_1',
  },
  {
    id: 'ae19',
    source: 'Semi_1',
    target: 'Final',
  },
  {
    id: 'ml18',
    source: 'Final',
    target: 'Semi_2',
  },
  {
    id: 'nj12',
    source: 'Cuartos_3',
    target: 'A2vsB1',
  },
  {
    id: 'rf13',
    source: 'Cuartos_3',
    target: 'C2vsD1',
  },
  {
    id: 'yhe5',
    source: 'Cuartos_4',
    target: 'E2vsF1',
  },
  {
    id: 'awds',
    source: 'Cuartos_4',
    target: 'G2vsH1',
  },
  {
    id: 'cgt7',
    source: 'Semi_2',
    target: 'Cuartos_3',
  },
  {
    id: 'cf57',
    source: 'Semi_2',
    target: 'Cuartos_4',
  },
];

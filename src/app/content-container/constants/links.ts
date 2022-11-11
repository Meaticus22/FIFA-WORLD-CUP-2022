import { Edge } from '@swimlane/ngx-graph';

export const LINKS: Edge[] = [
  {
    id: 'ae12',
    source: 'A1vsB2',
    target: 'Octavos_1',
    label: 'Winner A1 vs B2',
  },
  {
    id: 'ae13',
    source: 'C1vsD2',
    target: 'Octavos_1',
    label: 'Winner C1 vs D2',
  },
  {
    id: 'ae14',
    source: 'E1vsF2',
    target: 'Octavos_2',
    label: 'Winner A2 vs B1',
  },
  {
    id: 'ae15',
    source: 'G1vsH2',
    target: 'Octavos_2',
    label: 'Winner C2 vs D1',
  },
];

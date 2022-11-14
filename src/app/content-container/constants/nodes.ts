import { Node } from '@swimlane/ngx-graph';

export const NODES: Node[] = [
  {
    id: 'A1vsB2',
    label: 'A1 vs B2',

    data: {
      teamA: '',
      teamAPlaceholder: '1A',
      teamB: '',
      teamBPlaceholder: '2B',
      winner: '',
      target: { id: 'Cuartos_1', team: 'teamA' },
    },
  },
  {
    id: 'C1vsD2',
    label: 'C1 vs D2',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1C',
      teamBPlaceholder: '2D',
      winner: '',
      target: { id: 'Cuartos_1', team: 'teamB' },
    },
  },
  {
    id: 'Cuartos_1',
    label: 'Cuartos 1',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'QuarterFinal 1',
      teamBPlaceholder: 'QuarterFinal 2',
      winner: '',
      target: { id: 'Semi_1', team: 'teamA' },
    },
  },
  {
    id: 'E1vsF2',
    label: 'E1 vs F2',

    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1E',
      teamBPlaceholder: '2F',
      winner: '',
      target: { id: 'Cuartos_2', team: 'teamA' },
    },
  },
  {
    id: 'Final',
    label: 'Final',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'Finalist 1',
      teamBPlaceholder: 'Finalist 2',
      winner: '',
    },
  },
  {
    id: 'G1vsH2',
    label: 'G1 vs H2',

    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1G',
      teamBPlaceholder: 'H2',
      winner: '',

      target: { id: 'Cuartos_2', team: 'teamB' },
    },
  },
  {
    id: 'Cuartos_2',
    label: 'Cuartos 2',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'QuarterFinal 3',
      teamBPlaceholder: 'QuarterFinal 4',
      winner: '',
      target: { id: 'Semi_1', team: 'teamB' },
    },
  },
  {
    id: 'Semi_1',
    label: 'Semi 1',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'Semi 1',
      teamBPlaceholder: 'Semi 2',
      winner: '',
      target: { id: 'Final', team: 'teamA' },
    },
  },
  {
    id: 'A2vsB1',
    label: 'A2 vs B1',

    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1B',
      teamBPlaceholder: '2A',
      winner: '',
      target: { id: 'Cuartos_3', team: 'teamA' },
    },
  },

  {
    id: 'C2vsD1',
    label: 'C2 vs D1',

    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1D',
      teamBPlaceholder: '2C',
      winner: '',
      target: { id: 'Cuartos_3', team: 'teamB' },
    },
  },
  {
    id: 'Cuartos_3',
    label: 'Cuartos 3',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'QuarterFinal 5',
      teamBPlaceholder: 'QuarterFinal 6',
      winner: '',
      target: { id: 'Semi_2', team: 'teamA' },
    },
  },

  {
    id: 'E2vsF1',
    label: 'E2 vs F1',

    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1F',
      teamBPlaceholder: '2E',
      winner: '',
      target: { id: 'Cuartos_4', team: 'teamA' },
    },
  },

  {
    id: 'G2vsH1',
    label: 'G2 vs H1',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: '1H',
      teamBPlaceholder: '2G',
      winner: '',
      target: { id: 'Cuartos_4', team: 'teamB' },
    },
  },
  {
    id: 'Cuartos_4',
    label: 'Cuartos 4',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'QuarterFinal 7',
      teamBPlaceholder: 'QuarterFinal 8',
      winner: '',
      target: { id: 'Semi_2', team: 'teamB' },
    },
  },
  {
    id: 'Semi_2',
    label: 'Semi 2',
    data: {
      teamA: '',
      teamB: '',
      teamAPlaceholder: 'Semi 3',
      teamBPlaceholder: 'Semi 4',
      winner: '',
      target: { id: 'Final', team: 'teamB' },
    },
  },
];

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit {
  @Input() nodes: Node[] = [];
  @Input() links: Edge[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.nodes[0] = node;

    console.log(this.links);
  }

  ngOnChanges() {
    console.log(this.links);
    console.log(this.nodes);
  }
}

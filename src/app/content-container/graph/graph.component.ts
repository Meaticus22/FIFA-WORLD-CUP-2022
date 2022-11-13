import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit {
  @Input() nodes: Node[] = [];
  @Input() links: Edge[] = [];

  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit(): void {
    console.log('mounted');
  }

  ngAfterViewInit() {
    //  this.fitGraph();
    // this.centerGraph();
    setTimeout(() => {
      this.fitGraph();
    }, 1000);
  }

  centerGraph() {
    this.center$.next(true);
  }

  fitGraph() {
    this.zoomToFit$.next(true);
  }
}

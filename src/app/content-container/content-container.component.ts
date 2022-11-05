import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ContentContainerStore } from './content-container.store';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  providers: [ContentContainerStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentContainerComponent implements OnInit {
  constructor(private store: ContentContainerStore) {}

  vm$ = this.store.vm$;

  ngOnInit(): void {}
}

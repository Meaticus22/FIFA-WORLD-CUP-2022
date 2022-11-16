import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mundial';

  constructor(private metaService: Meta) {}

  ngOnInit() {
    // this.metaService.addTags(
    //   [
    //     {
    //       property: 'og:title',
    //       content: 'Copa del Mundo Qatar 2022',
    //     },
    //     {
    //       property: 'og:type',
    //       content: 'website',
    //     },
    //     {
    //       property: 'og:description',
    //       content: 'Pronostica quien ganará el mundial de futbol',
    //     },
    //     {
    //       name: 'keywords',
    //       content: 'fútbol, mundial, 2022, copa del mundo, qatar',
    //     },
    //     {
    //       property: 'og:image',
    //       content: 'https://copa-del-mundo.netlify.app/assets/preview.png',
    //     },
    //     { name: 'twitter:title', content: 'Mundial de fútbol 2022' },
    //     {
    //       name: 'twitter:description',
    //       content: 'Pronostica quien ganará el mundial de futbol',
    //     },
    //     { name: 'twitter:creator', content: '@nelsongutidev' },
    //     {
    //       name: 'twitter:site',
    //       content: '@nelsongutidev',
    //     },
    //     {
    //       name: 'twitter:image',
    //       content: 'https://copa-del-mundo.netlify.app/assets/preview.png',
    //     },
    //     {
    //       name: 'twitter:card',
    //       content: 'summary_large_image',
    //     },
    //   ],
    //   true
    // );
  }
}

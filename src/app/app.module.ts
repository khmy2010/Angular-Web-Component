import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GraphComponent } from './component/graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphDataComponent } from './graph-data/graph-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    GraphComponent,
    GraphDataComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: environment.webComponent ? [] : [AppComponent],
  entryComponents: environment.webComponent ? [PostsComponent] : []
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const element: any = createCustomElement(PostsComponent, { injector: this.injector });
    customElements.define('ng-web-component', element);
  }
}

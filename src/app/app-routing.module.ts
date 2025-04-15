import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { ChartjsContainerComponent } from './charts-container/chartjs/chartjs-container.component';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { D3jsContainerComponent } from './charts-container/d3js/d3js-container.component';
import { HomeDashboardComponent } from './dashboards/home-dashboard/home-dashboard.component';
import { MapsDashboardComponent } from './dashboards/maps-dashboard/maps-dashboard.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', title: 'about me', component: AboutMeComponent }, 
  { path: 'about-me', component: AboutMeComponent },
  { path: 'home', title: 'home dashboard', component: HomeDashboardComponent },
  { path: 'maps', title: 'maps dashboard', component: MapsDashboardComponent },
  {
    path: 'charts',
    title: 'chart view',
    component: ChartsContainerComponent,
    children: [
      { path: '', title: 'chart view', component: ChartjsContainerComponent },
      {
        path: 'chartjs',
        title: 'chartjs',
        component: ChartjsContainerComponent,
      },
      { path: 'd3js', title: 'd3js', component: D3jsContainerComponent },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Witthai | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    data: { animation: 'overviewPage' },
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { animation: 'analyticsPage' },
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: { animation: 'managePage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

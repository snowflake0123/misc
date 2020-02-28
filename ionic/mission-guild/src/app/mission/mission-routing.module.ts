import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionPage } from './mission.page';

const routes: Routes = [
  {
    path: ':missionId',
    component: MissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}

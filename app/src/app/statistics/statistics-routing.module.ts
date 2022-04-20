import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':playerId',
    component: PlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}

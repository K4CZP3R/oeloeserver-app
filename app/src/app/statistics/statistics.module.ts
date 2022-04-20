import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '../translate/translate.module';
import { MainComponent } from './components/main/main.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerInfoCardComponent } from './components/player-info-card/player-info-card.component';

@NgModule({
  declarations: [MainComponent, StatsCardComponent, PlayerComponent, PlayerInfoCardComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SharedModule,
    TranslateModule,
  ],
})
export class StatisticsModule {}

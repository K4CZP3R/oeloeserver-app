import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeTextComponent } from './components/welcome-text/welcome-text.component';
import { ServerCardComponent } from './components/server-card/server-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { PlayersCardComponent } from './components/players-card/players-card.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { MapCardComponent } from './components/map-card/map-card.component';

@NgModule({
  declarations: [
    MainComponent,
    WelcomeTextComponent,
    ServerCardComponent,
    PlayersCardComponent,
    StatsCardComponent,
    MapCardComponent,
  ],
  imports: [CommonModule, SharedModule, LandingRoutingModule, MatBadgeModule],
})
export class LandingModule {}

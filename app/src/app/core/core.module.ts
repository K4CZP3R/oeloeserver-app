import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './core-routing.module';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '../translate/services/translate.service';
import { TranslateModule } from '../translate/translate.module';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  bootstrap: [MainComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initWithDependencyFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
})
export class CoreModule {}
export function initWithDependencyFactory(_translateService: TranslateService) {
  return () => {};
}

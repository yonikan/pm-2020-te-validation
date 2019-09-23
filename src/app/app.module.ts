import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app.routes';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { TeamOverviewModule } from './team-overview/team-overview.module';
import { MatchesModule } from './matches/matches.module';
import { AppComponent } from './app.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentLoaderModule,
    CoreModule,
    LayoutModule,
    AuthModule,
    TeamOverviewModule,
    MatchesModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

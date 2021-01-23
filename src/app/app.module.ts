import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataLoader } from '../core/services/framework/data-loader';
import { MovieSearchHandler } from '../core/services/service-handlers/movie-search-handler';
import { Constant } from '../core/util/constants';
import { DataStore } from '../core/util/data-store';
import { SpinnerService } from '../core/util/spinner-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailResultCardModule } from './detail-result-card/detail-result-card.module';
import { MovieSearchPageModule } from './movie-search-page/movie-search-page.module';
import { RouterModule } from '@angular/router';
import { BaseService } from 'src/core/services/framework/base-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultCardModule } from './result-card/result-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MovieSearchPageModule,
    ResultCardModule,
    DetailResultCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    Constant,
    DataLoader,
    DataStore,
    BaseService,
    HttpClient,
    MovieSearchHandler,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetailResultCardModule } from '../detail-result-card/detail-result-card.module';
import { ResultCardModule } from '../result-card/result-card.module';
import { MovieSearchPageComponent } from './movie-search-page.component';

@NgModule({
  declarations: [MovieSearchPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatCardModule,
    ResultCardModule,
    MatPaginatorModule,
    DetailResultCardModule,
    MatProgressSpinnerModule
  ]
})
export class MovieSearchPageModule {}

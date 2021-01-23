import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ResultCardComponent } from './result-card.component';

@NgModule({
  declarations: [ResultCardComponent],
  exports: [
    ResultCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ResultCardModule { }

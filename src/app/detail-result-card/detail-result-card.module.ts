import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailResultCardComponent } from './detail-result-card.component';

@NgModule({
    declarations: [DetailResultCardComponent],
    exports: [
        DetailResultCardComponent
    ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class DetailResultCardModule { }

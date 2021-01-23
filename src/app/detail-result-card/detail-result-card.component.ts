import { Component, Input, OnInit } from '@angular/core';
import { DetailResult } from '../../core/model/detail-result';

@Component({
  selector: 'app-detail-result-card',
  templateUrl: './detail-result-card.component.html',
  styleUrls: ['./detail-result-card.component.scss']
})
export class DetailResultCardComponent implements OnInit {

  @Input() detailResult: DetailResult;

  constructor() { }

  ngOnInit() {
  }

}

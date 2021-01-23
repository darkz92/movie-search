import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailResult } from '../../core/model/detail-result';
import { Result } from '../../core/model/result';
import { MovieSearchHandler } from '../../core/services/service-handlers/movie-search-handler';
import { DataKey, DataStore } from '../../core/util/data-store';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {

  @Input() result: Result;
  @Output() detailClick: EventEmitter<any> = new EventEmitter<any>();

  public readonly btnText = 'DETAIL';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Event emitter of detail btn click
   * @param event
   */
  onDetailSearch(event) {
    if (event) {
      this.detailClick.emit(true);
    }
  }
}

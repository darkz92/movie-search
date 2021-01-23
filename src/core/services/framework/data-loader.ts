import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataKey, DataStore } from '../../util';
import { BaseService } from './base-service';

@Injectable()
export class DataLoader {

  constructor(
    private dataStore: DataStore,
    private baseService: BaseService
  ) {
  }

  public getAndLoadResponse<T>(
    dataKey: DataKey, url: string, params?: HttpParams, pathVariables?: any[]) {
    // clear errors
    this.dataStore.set(DataKey.error, {});

    // if there is no entry for the given data key, create a new subject and store it there
    if (!this.dataStore.has(dataKey, true)) {
      this.dataStore.set(dataKey, new BehaviorSubject(null));
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    let resultsWrapper;
    this.baseService.get<any>(url, params, headers).subscribe(results => {
      if (results && results.body) {
        resultsWrapper = results.body;
        if (resultsWrapper) {
          this.dataStore.set(dataKey, resultsWrapper);
        }
      }
    });
  }
}

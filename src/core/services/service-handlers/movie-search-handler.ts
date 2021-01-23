import { HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import { APP } from '../../util/constants';
import { DataKey, DataStore } from '../../util/data-store';
import {DataLoader} from '../framework';
import {Observable} from 'rxjs';

@Injectable()
export class MovieSearchHandler {
  constructor(private dataLoader: DataLoader,
              private dataStore: DataStore) {
  }

  /**
   * Get request of search result
   * @param title
   * @param page
   */
  public getSearchResultByTitle(title: string, page: string): Observable<any> {
    const movieSearchService = environment.backend.movieSearchService;
    let params: HttpParams = new HttpParams();
    params = params.append('s', title);
    params = params.append('apiKey', APP.DEFAULTS.API_KEY);
    params = params.append('page', page);
    this.dataLoader.getAndLoadResponse(DataKey.searchResults, movieSearchService, params);
    return this.dataStore.get(DataKey.searchResults, true);
  }

  /**
   * Get request of detail search result
   * @param id
   */
  public getDetailResult(id: string): Observable<any> {
    const movieSearchService = environment.backend.movieSearchService;
    let params: HttpParams = new HttpParams();
    params = params.append('i', id);
    params = params.append('apiKey', APP.DEFAULTS.API_KEY);

    this.dataLoader.getAndLoadResponse(DataKey.detailResult, movieSearchService, params);
    return this.dataStore.get(DataKey.detailResult, true);
  }
}

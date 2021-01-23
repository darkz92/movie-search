import { Component, OnInit } from '@angular/core';
import { DetailResult } from '../../core/model/detail-result';
import { Result } from '../../core/model/result';
import { MovieSearchHandler } from '../../core/services/service-handlers/movie-search-handler';
import { DataKey, DataStore } from '../../core/util/data-store';
import { SpinnerService } from '../../core/util/spinner-service';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.scss']
})
export class MovieSearchPageComponent implements OnInit {

  public results: Result[] = [];
  public detailResult: DetailResult;

  public searchValue = '';
  public totalResults = 0;
  public isError = false;
  public errorText = '';

  public readonly pageTitle = 'OMDB Search';
  public readonly mainPlaceholder = 'Search a movie';
  public readonly searchBtnText = 'SEARCH';
  public readonly welcomeText = 'Welcome to OMDB Search, search something in the bar above!';

  constructor(
    private movieSearchHandler: MovieSearchHandler,
    private dataStore: DataStore,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  /**
   * Click Event of main search button
   * @param event
   */
  public onSearch(event) {
    if (event) {
      // showing spinner
      this.spinnerService.showSpinner();
      // API call request
      this.movieSearchHandler.getSearchResultByTitle(this.searchValue, '1').subscribe(data => {
        if (data && data.Response === 'True') { // Success response
          this.isError = false;
          this.results = data.Search;
          this.totalResults = data.totalResults;
          this.dataStore.get(DataKey.searchResults).next(null);
        } else if (data && data.Error) { // Error response
          this.isError = true;
          this.errorText = data.Error;
          this.results = [];
          this.dataStore.get(DataKey.searchResults).next(null);
        }
        this.spinnerService.hideSpinner(); // hide spinner
      });
    }
  }

  /**
   * Click Event of Detail button in a search result
   * @param event
   * @param result - selected result
   */
  public onDetailClick(event: boolean, result: Result) {
    if (event) {
      // Show spinner
      this.spinnerService.showSpinner();
      this.dataStore.get(DataKey.detailResult).next(null);
      // API call request
      this.movieSearchHandler.getDetailResult(result.imdbID).subscribe(data => {
        if (data) {
          this.spinnerService.hideSpinner(); // hide spinner
          this.detailResult = data;
          this.dataStore.get(DataKey.detailResult).next(null);
        }
      });
    }
  }

  /**
   * Next Page event in paginator
   * @param event
   */
  public onNextPage(event) {
    if (event) {
      // Show spinner
      this.spinnerService.showSpinner();
      // API call request
      this.movieSearchHandler.getSearchResultByTitle(this.searchValue, (event.pageIndex + 1).toString())
          .subscribe(data => {
            if (data) {
              this.spinnerService.hideSpinner();
              this.results = data.Search;
              this.totalResults = data.totalResults;
            }
          });
    }
  }
}

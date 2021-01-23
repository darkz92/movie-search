import {Injectable} from '@angular/core';

@Injectable()
export class Constant {

  public get(ns: string, code: string): string {
    return APP[ns][code];
  }
}

// tslint:disable-next-line:no-namespace
export namespace APP {
  export namespace ENDPOINT_ID {
    export const MOVIE_SEARCH = '/api/movie-search';
  }

  export namespace STATUS {
    export const SUCCESS = 'SUCCESS';
    export const ERROR = 'ERROR';
    export const WARNING = 'WARNING';
  }

  export namespace DEFAULTS {
    export const API_KEY = 'f6c05bde';
  }

}


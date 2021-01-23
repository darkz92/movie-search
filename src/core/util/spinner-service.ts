import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  public show = false;

  constructor() {}

  public showSpinner() {
    this.show = true;
  }

  public hideSpinner() {
    this.show = false;
  }
}

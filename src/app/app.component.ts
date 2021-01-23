import { Component } from '@angular/core';
import { SpinnerService } from '../core/util/spinner-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-search';

  constructor(private spinnerService: SpinnerService) {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipes';
  title = 'angular-testing-recipe';
  // tslint:disable-next-line: typedef
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

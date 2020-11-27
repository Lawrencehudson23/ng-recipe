import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  constructor() {}
  // tslint:disable-next-line: typedef
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  constructor(private dsService: DataStorageService) {}
  onSaveData(): void {
    this.dsService.storeRecipes();
  }
  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }
}

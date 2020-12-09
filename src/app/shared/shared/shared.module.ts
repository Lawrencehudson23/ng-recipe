import { DropdownDirective } from './../dropdown.directive';
import { PlaceHolderDirective } from './../placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './../loading-spinner/loading-spinner.component';
import { AlertComponent } from './../alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}

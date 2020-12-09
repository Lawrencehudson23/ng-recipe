import { SharedModule } from './../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    // NOTE: ngFor ngIf
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
    SharedModule,
  ],
  exports: [RouterModule],
})
export class ShoppingListModule {}

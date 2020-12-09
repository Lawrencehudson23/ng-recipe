import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
  ],
  // NOTE: already exports in recipes-routing module
  // exports: [
  //   RecipesComponent,
  //   RecipeListComponent,
  //   RecipeDetailComponent,
  //   RecipeItemComponent,
  //   RecipeStartComponent,
  //   RecipeEditComponent,
  // ],
})
export class RecipesModule {}

import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  providers: [
    RecipeService,
    ShoppingListService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}

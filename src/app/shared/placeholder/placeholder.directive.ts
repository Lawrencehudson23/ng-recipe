import { Directive, ViewContainerRef } from '@angular/core';
@Directive({ selector: '[appPlaceholder]' })
export class PlaceHolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

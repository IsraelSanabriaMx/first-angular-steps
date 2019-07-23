import { NgModule } from '@angular/core';

import { WishFilterPipe } from './wish-filter.pipe';

@NgModule({
  declarations: [WishFilterPipe],
  exports: [WishFilterPipe],
})
export class PipesModule { }

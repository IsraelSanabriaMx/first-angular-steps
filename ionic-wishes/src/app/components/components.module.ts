import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListComponent } from './list/list.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports: [
    ListComponent,
  ],
})
export class ComponentsModule { }

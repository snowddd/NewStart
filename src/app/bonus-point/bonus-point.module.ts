import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusPointComponent } from './bonus-point.component';
import { BsJs1Service } from './bs-js1.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BonusPointComponent
  ],
  exports: [
    BonusPointComponent
  ],
  providers: [
    BsJs1Service,
  ]
})
export class BonusPointModule { }

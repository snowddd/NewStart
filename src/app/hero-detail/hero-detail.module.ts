import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    HeroDetailRoutingModule,
  ]
})
export class HeroDetailModule { }

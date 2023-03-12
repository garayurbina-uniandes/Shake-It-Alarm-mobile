import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatternPageRoutingModule } from './pattern-routing.module';

import { PatternPage } from './pattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatternPageRoutingModule
  ],
  declarations: [PatternPage]
})
export class PatternPageModule {}

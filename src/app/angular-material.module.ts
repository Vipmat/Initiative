import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatSelectModule],
  exports: [MatToolbarModule, MatSelectModule],
})
export class AngularMaterialModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatSelectModule],
  exports: [MatToolbarModule, MatMenuModule, MatSelectModule],
})
export class AngularMaterialModule {}

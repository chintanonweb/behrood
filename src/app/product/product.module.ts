import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetSpeciesComponent } from './target-species/target-species.component';
import { DosageFormComponent } from './dosage-form/dosage-form.component';
import { DrugCategoryComponent } from './drug-category/drug-category.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    TargetSpeciesComponent,
    DosageFormComponent,
    DrugCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

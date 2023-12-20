import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetSpeciesComponent } from './target-species/target-species.component';
import { DosageFormComponent } from './dosage-form/dosage-form.component';
import { DrugCategoryComponent } from './drug-category/drug-category.component';


const routes: Routes = [
    { path: 'target-species', component: TargetSpeciesComponent },
    { path: 'dosage-form', component: DosageFormComponent },
    { path: 'drug-category', component: DrugCategoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }

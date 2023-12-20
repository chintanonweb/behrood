import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCategoryComponent } from './drug-category.component';

describe('DrugCategoryComponent', () => {
  let component: DrugCategoryComponent;
  let fixture: ComponentFixture<DrugCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugCategoryComponent]
    });
    fixture = TestBed.createComponent(DrugCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

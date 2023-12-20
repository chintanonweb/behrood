import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSpeciesComponent } from './target-species.component';

describe('TargetSpeciesComponent', () => {
  let component: TargetSpeciesComponent;
  let fixture: ComponentFixture<TargetSpeciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetSpeciesComponent]
    });
    fixture = TestBed.createComponent(TargetSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

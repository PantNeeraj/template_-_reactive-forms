import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatReactiveFormsComponent } from './mat-reactive-forms.component';

describe('MatReactiveFormsComponent', () => {
  let component: MatReactiveFormsComponent;
  let fixture: ComponentFixture<MatReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

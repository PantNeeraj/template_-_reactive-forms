import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTempFormComponent } from './mat-temp-form.component';

describe('MatTempFormComponent', () => {
  let component: MatTempFormComponent;
  let fixture: ComponentFixture<MatTempFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTempFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

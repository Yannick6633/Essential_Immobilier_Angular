import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeureEditComponent } from './demeure-edit.component';

describe('DemeureEditComponent', () => {
  let component: DemeureEditComponent;
  let fixture: ComponentFixture<DemeureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeureEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

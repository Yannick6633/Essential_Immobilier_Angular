import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereEditComponent } from './critere-edit.component';

describe('CritereEditComponent', () => {
  let component: CritereEditComponent;
  let fixture: ComponentFixture<CritereEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritereEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

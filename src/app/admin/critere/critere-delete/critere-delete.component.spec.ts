import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereDeleteComponent } from './critere-delete.component';

describe('CritereDeleteComponent', () => {
  let component: CritereDeleteComponent;
  let fixture: ComponentFixture<CritereDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritereDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

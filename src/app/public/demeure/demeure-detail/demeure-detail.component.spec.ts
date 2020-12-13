import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeureDetailComponent } from './demeure-detail.component';

describe('DemeureDetailComponent', () => {
  let component: DemeureDetailComponent;
  let fixture: ComponentFixture<DemeureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeureDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

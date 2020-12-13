import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeureAddComponent } from './demeure-add.component';

describe('DemeureAddComponent', () => {
  let component: DemeureAddComponent;
  let fixture: ComponentFixture<DemeureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeureAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

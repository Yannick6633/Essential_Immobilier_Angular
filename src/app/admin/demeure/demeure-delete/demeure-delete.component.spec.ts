import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeureDeleteComponent } from './demeure-delete.component';

describe('DemeureDeleteComponent', () => {
  let component: DemeureDeleteComponent;
  let fixture: ComponentFixture<DemeureDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeureDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeureDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

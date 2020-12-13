import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeureListComponent } from './demeure-list.component';

describe('DemeureListComponent', () => {
  let component: DemeureListComponent;
  let fixture: ComponentFixture<DemeureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

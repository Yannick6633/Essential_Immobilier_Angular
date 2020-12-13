import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereListComponent } from './critere-list.component';

describe('CritereListComponent', () => {
  let component: CritereListComponent;
  let fixture: ComponentFixture<CritereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

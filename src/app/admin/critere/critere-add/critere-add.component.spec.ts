import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereAddComponent } from './critere-add.component';

describe('CritereAddComponent', () => {
  let component: CritereAddComponent;
  let fixture: ComponentFixture<CritereAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritereAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

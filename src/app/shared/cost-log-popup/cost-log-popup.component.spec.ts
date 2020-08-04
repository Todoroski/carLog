import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostLogPopupComponent } from './cost-log-popup.component';

describe('CostLogPopupComponent', () => {
  let component: CostLogPopupComponent;
  let fixture: ComponentFixture<CostLogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostLogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostLogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

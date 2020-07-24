import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelLogPopupComponent } from './fuel-log-popup.component';

describe('FuelLogPopupComponent', () => {
  let component: FuelLogPopupComponent;
  let fixture: ComponentFixture<FuelLogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelLogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelLogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

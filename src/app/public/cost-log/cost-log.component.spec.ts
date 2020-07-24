import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostLogComponent } from './cost-log.component';

describe('CostLogComponent', () => {
  let component: CostLogComponent;
  let fixture: ComponentFixture<CostLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

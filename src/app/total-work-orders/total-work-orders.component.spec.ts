import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWorkOrdersComponent } from './total-work-orders.component';

describe('TotalWorkOrdersComponent', () => {
  let component: TotalWorkOrdersComponent;
  let fixture: ComponentFixture<TotalWorkOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalWorkOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

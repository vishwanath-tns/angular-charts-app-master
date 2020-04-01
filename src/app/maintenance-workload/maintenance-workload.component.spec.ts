import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceWorkloadComponent } from './maintenance-workload.component';

describe('MaintenanceWorkloadComponent', () => {
  let component: MaintenanceWorkloadComponent;
  let fixture: ComponentFixture<MaintenanceWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceWorkloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

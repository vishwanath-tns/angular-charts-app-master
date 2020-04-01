import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOPrioritiesComponentComponent } from './wopriorities-component.component';

describe('WOPrioritiesComponentComponent', () => {
  let component: WOPrioritiesComponentComponent;
  let fixture: ComponentFixture<WOPrioritiesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOPrioritiesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOPrioritiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

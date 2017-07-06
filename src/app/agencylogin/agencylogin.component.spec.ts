import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyloginComponent } from './agencylogin.component';

describe('AgencyloginComponent', () => {
  let component: AgencyloginComponent;
  let fixture: ComponentFixture<AgencyloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

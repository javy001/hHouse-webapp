import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetListComponent } from './cabinet-list.component';

describe('CabinetListComponent', () => {
  let component: CabinetListComponent;
  let fixture: ComponentFixture<CabinetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

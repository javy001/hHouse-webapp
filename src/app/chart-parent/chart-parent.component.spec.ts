import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartParentComponent } from './chart-parent.component';

describe('ChartParentComponent', () => {
  let component: ChartParentComponent;
  let fixture: ComponentFixture<ChartParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStackedChartComponent } from './common-stacked-chart.component';

describe('CommonStackedChartComponent', () => {
  let component: CommonStackedChartComponent;
  let fixture: ComponentFixture<CommonStackedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStackedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

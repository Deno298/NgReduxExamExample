import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainOverviewComponent } from './train-overview.component';

describe('TrainOverviewComponent', () => {
  let component: TrainOverviewComponent;
  let fixture: ComponentFixture<TrainOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

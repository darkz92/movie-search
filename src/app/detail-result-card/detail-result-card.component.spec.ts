import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResultCardComponent } from './detail-result-card.component';

describe('DetailResultCardComponent', () => {
  let component: DetailResultCardComponent;
  let fixture: ComponentFixture<DetailResultCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailResultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

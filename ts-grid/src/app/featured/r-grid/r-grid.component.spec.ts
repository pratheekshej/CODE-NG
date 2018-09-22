import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RGridComponent } from './r-grid.component';

describe('RGridComponent', () => {
  let component: RGridComponent;
  let fixture: ComponentFixture<RGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

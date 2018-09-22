import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGridComponent } from './n-grid.component';

describe('NGridComponent', () => {
  let component: NGridComponent;
  let fixture: ComponentFixture<NGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrGridComponent } from './err-grid.component';

describe('ErrGridComponent', () => {
  let component: ErrGridComponent;
  let fixture: ComponentFixture<ErrGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

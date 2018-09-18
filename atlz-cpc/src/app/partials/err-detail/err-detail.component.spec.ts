import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrDetailComponent } from './err-detail.component';

describe('ErrDetailComponent', () => {
  let component: ErrDetailComponent;
  let fixture: ComponentFixture<ErrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

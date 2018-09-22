import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrNavComponent } from './err-nav.component';

describe('ErrNavComponent', () => {
  let component: ErrNavComponent;
  let fixture: ComponentFixture<ErrNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

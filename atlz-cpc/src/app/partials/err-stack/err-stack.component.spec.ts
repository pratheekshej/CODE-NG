import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrStackComponent } from './err-stack.component';

describe('ErrStackComponent', () => {
  let component: ErrStackComponent;
  let fixture: ComponentFixture<ErrStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

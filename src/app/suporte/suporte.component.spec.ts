import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteComponent } from './suporte.component';

describe('SuporteComponent', () => {
  let component: SuporteComponent;
  let fixture: ComponentFixture<SuporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

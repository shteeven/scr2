import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaitsDevelopmentComponent } from './caits-development.component';

describe('CaitsDevelopmentComponent', () => {
  let component: CaitsDevelopmentComponent;
  let fixture: ComponentFixture<CaitsDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaitsDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaitsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

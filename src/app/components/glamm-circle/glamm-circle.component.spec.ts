import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlammCircleComponent } from './glamm-circle.component';

describe('GlammCircleComponent', () => {
  let component: GlammCircleComponent;
  let fixture: ComponentFixture<GlammCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlammCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlammCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

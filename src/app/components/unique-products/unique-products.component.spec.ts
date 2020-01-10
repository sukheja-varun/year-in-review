import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueProductsComponent } from './unique-products.component';

describe('UniqueProductsComponent', () => {
  let component: UniqueProductsComponent;
  let fixture: ComponentFixture<UniqueProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

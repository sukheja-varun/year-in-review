import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGiftsComponent } from './free-gifts.component';

describe('FreeGiftsComponent', () => {
  let component: FreeGiftsComponent;
  let fixture: ComponentFixture<FreeGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

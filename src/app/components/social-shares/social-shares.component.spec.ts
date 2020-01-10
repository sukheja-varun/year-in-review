import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSharesComponent } from './social-shares.component';

describe('SocialSharesComponent', () => {
  let component: SocialSharesComponent;
  let fixture: ComponentFixture<SocialSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

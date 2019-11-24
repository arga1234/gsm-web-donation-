import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpenDonationComponent } from './list-open-donation.component';

describe('ListOpenDonationComponent', () => {
  let component: ListOpenDonationComponent;
  let fixture: ComponentFixture<ListOpenDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOpenDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpenDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

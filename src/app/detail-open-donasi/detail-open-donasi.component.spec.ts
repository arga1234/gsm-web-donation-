import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOpenDonasiComponent } from './detail-open-donasi.component';

describe('DetailOpenDonasiComponent', () => {
  let component: DetailOpenDonasiComponent;
  let fixture: ComponentFixture<DetailOpenDonasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOpenDonasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOpenDonasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

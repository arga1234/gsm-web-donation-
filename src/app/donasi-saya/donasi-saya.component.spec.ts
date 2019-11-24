import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonasiSayaComponent } from './donasi-saya.component';

describe('DonasiSayaComponent', () => {
  let component: DonasiSayaComponent;
  let fixture: ComponentFixture<DonasiSayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonasiSayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonasiSayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

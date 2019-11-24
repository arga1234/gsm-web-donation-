import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAndKComponent } from './s-and-k.component';

describe('SAndKComponent', () => {
  let component: SAndKComponent;
  let fixture: ComponentFixture<SAndKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAndKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAndKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

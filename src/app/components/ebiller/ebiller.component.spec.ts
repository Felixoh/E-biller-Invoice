import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbillerComponent } from './ebiller.component';

describe('EbillerComponent', () => {
  let component: EbillerComponent;
  let fixture: ComponentFixture<EbillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

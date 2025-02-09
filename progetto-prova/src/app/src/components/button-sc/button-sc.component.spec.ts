import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScComponent } from './button-sc.component';

describe('ButtonScComponent', () => {
  let component: ButtonScComponent;
  let fixture: ComponentFixture<ButtonScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonScComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

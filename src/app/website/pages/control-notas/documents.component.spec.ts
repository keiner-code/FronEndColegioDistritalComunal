import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNotasComponent } from './control-notas.component';

describe('ControlNotasComponent', () => {
  let component: ControlNotasComponent;
  let fixture: ComponentFixture<ControlNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

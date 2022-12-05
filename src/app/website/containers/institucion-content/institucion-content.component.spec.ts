import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionContentComponent } from './institucion-content.component';

describe('InstitucionContentComponent', () => {
  let component: InstitucionContentComponent;
  let fixture: ComponentFixture<InstitucionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitucionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

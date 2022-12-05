import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegioCrudComponent } from './colegio-crud.component';

describe('ColegioCrudComponent', () => {
  let component: ColegioCrudComponent;
  let fixture: ComponentFixture<ColegioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColegioCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColegioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFormatosComponent } from './tabla-formatos.component';

describe('TablaFormatosComponent', () => {
  let component: TablaFormatosComponent;
  let fixture: ComponentFixture<TablaFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFormatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUserComponent } from './tabla-user.component';

describe('TablaUserComponent', () => {
  let component: TablaUserComponent;
  let fixture: ComponentFixture<TablaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

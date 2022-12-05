import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatContentComponent } from './format-content.component';

describe('FormatContentComponent', () => {
  let component: FormatContentComponent;
  let fixture: ComponentFixture<FormatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasContentComponent } from './notas-content.component';

describe('NotasContentComponent', () => {
  let component: NotasContentComponent;
  let fixture: ComponentFixture<NotasContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

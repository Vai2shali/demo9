import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplareComponent } from './templare.component';

describe('TemplareComponent', () => {
  let component: TemplareComponent;
  let fixture: ComponentFixture<TemplareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

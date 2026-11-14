import { ComponentFixture, TestBed } from '@angular/core/testing';
import { inicio } from './inicio';

describe('inicio', () => {
  let component: inicio;
  let fixture: ComponentFixture<inicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [inicio],
    }).compileComponents();

    fixture = TestBed.createComponent(inicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

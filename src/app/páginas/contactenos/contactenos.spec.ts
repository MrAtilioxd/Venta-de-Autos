import { ComponentFixture, TestBed } from '@angular/core/testing';
import { contactenos } from './contactenos';

describe('contactenos', () => {
  let component: contactenos;
  let fixture: ComponentFixture<contactenos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [contactenos],
    }).compileComponents();

    fixture = TestBed.createComponent(contactenos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

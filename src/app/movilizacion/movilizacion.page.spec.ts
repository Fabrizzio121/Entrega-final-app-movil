import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovilizacionPage } from './movilizacion.page';

describe('MovilizacionPage', () => {
  let component: MovilizacionPage;
  let fixture: ComponentFixture<MovilizacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCanvasComponent } from './navbar-canvas.component';

describe('NavbarCanvasComponent', () => {
  let component: NavbarCanvasComponent;
  let fixture: ComponentFixture<NavbarCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

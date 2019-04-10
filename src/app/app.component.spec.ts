/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AppComponent, NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test para saber si el componente App tiene la etiqueta <router-outlet></router-outlet>
  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });


});

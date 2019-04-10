/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs';

class RouterStub {
  navigate(params) {}
}

class ActivatedRouterStub {
  /* Se cambia el observable por un subject que se le puede inyectar data
     se crea un método push para inyectarle al subject un valor
     se crea un método get params para retornar el objecto subject como un Observable
  */
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }

  // params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing to navigate
  it('should redirect the user to the users page after saving', () => {
    // Arrange
    const router = TestBed.get(Router); // Se asigna el router a la variable
    const spy = spyOn(router, 'navigate'); // Spy el método navigate del Router

    // Act (Lanza la función o el método)
    component.save();

    // Assert
    expect(spy).toHaveBeenCalledWith(['users']); // Se le pasa el argumento de la ruta a la que deberia navegar

  });

  // Testing to navigate in ngOninit
  it('should navigate the user to the not found page when an invalid user id is passed', () => {
    // Arrange
    const router = TestBed.get(Router); // Se asigna el router a la variable
    const spy = spyOn(router, 'navigate'); // Spy el método navigate del Router

    const route: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    // Act (Lanza la función o el método) No se lanza porque toma lo del ngOninit

    // Assert
    expect(spy).toHaveBeenCalledWith(['not-found']); // Se le pasa el argumento de la ruta a la que deberia navegar

  });
});

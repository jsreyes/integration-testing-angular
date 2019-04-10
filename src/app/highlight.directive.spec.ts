/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[0]; // Como hay dos parrafos se indica cual tomar

    const el: HTMLElement = de.nativeElement;

    expect(el.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with default color', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[1]; // Como hay dos parrafos se indica cual tomar

    const el: HTMLElement = de.nativeElement;
    const directive = de.injector.get(HighlightDirective); // Se simula la inyeccion de la directiva al elemento

    expect(el.style.backgroundColor).toBe(directive.defaultColor);


    // Este expect es muy especifico, ya que el color por default de la directiva puede ser otro, por tal motivo la directiva es fragil
    // expect(el.style.backgroundColor).toBe('yellow');
  });
});

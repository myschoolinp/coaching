/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildComponent } from './child.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let html: HTMLElement
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      schemas: [NO_ERRORS_SCHEMA] // for ignoring the unknow tag and attribute -- no recommended use as usual.
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

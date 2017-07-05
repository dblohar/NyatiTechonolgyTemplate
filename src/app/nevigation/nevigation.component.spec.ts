/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NevigationComponent } from './nevigation.component';

describe('NevigationComponent', () => {
  let component: NevigationComponent;
  let fixture: ComponentFixture<NevigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
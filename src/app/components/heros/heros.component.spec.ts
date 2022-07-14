/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HerosComponent } from './heros.component';
import { HeroService } from 'src/app/services/hero.service';
import { of } from 'rxjs';

describe('Heros--Component', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;
  let heroService: HeroService;
  let HEROES: any;
  let mockService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HerosComponent],
      providers: [HeroService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    heroService = new HeroService();
    fixture.detectChanges();
    HEROES = [{
      name: "kk"
    }]
    mockService = jasmine.createSpyObj([
      'getHeroes'
    ])
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("get list of heroes on getheroes", () => {
    let response: [] = [];
    spyOn(heroService, 'getHeroes').and.returnValue(of(HEROES));
    heroService.getHeroes().subscribe((res) => {
      response = res;
    })
    expect(response).toEqual(HEROES);
  })
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from './hero.service';

describe('Service: Hero', () => {
  let heroService: HeroService;
  let mockData: any = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });
  beforeEach(() => {
    heroService = new HeroService();
    mockData = [{ name: "kk" }];
  })
  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it("should be length 1", () => {
    let response: [] = [];
    spyOn(heroService, 'getHeroes').and.returnValue(of(mockData))
    heroService.getHeroes().subscribe((res: any) => {
      response = res;
    })
    expect(response).toEqual(mockData);
  })

});

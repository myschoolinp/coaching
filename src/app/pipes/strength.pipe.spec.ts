/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StrengthPipe } from './strength.pipe';

describe('Pipe: Strengthe', () => {
  let pipe: StrengthPipe;
  beforeEach(() => {
    pipe = new StrengthPipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("if value less than 10 it should be weak", () => {
    expect(pipe.transform(5)).toEqual("weak");

  });

  it("if value greater than 10 it should be medium", () => {
    expect(pipe.transform(11)).toEqual("medium");

  });

  it("if value greater than 50 it should be strong", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(51)).toEqual("strong");

  })
});

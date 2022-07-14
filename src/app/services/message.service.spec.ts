/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('Message=Service:', () => {
  let messageService: MessageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });
  beforeEach(() => {
    messageService = new MessageService();
  })
  it('should ...', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it("its should be lenth 0 when load", () => {
    expect(messageService.message.length).toBe(0);
  })

  it("its should be lenth 1 when add", () => {
    messageService.add("hello");
    expect(messageService.message.length).toEqual(1);
  })

  it("its should be clear length will be 0", () => {
    messageService.add("hello");
    messageService.clear();
    expect(messageService.message.length).toEqual(0);
  })
});

import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService | null;

  beforeEach(() => {
    service = new CommonService();
  })

  it('should return app name', () => {
      expect(service?.getAppName()).toBe('Easy forms');
  })

  it('should return app slogan', () => {
      expect(service?.getAppSlogan()).toBe('Create forms, collect data and export it at ease');
  })

  afterEach(() => { 
    service = null;
  })
});

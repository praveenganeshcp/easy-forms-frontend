import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getAppName(): string {
    return 'Easy forms';
  }

  getAppSlogan() : string {
    return 'Create forms, collect data and export it at ease';
  }
}

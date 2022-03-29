import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getAppName(): string {
    return 'Easy forms';
  }
}

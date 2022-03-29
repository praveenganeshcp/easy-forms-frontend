import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataSourceService {

  constructor() { }

  fetchFormList() {
    return of([
      {
        id: "sss",
        no: 123,
        name: "Survey form",
        createdOn: "2022-03-29T17:10:16.599Z",
        responseCount: 100,
        link: 'sssss',
      },
      {
        id: "sss",
        no: 123,
        name: "Survey form",
        createdOn: "2022-03-29T17:10:16.599Z",
        responseCount: 100,
        link: 'sssss',
      }
    ]).pipe(
      delay(1500),
    )
  }
}

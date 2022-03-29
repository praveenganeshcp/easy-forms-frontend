import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FormDataSourceService } from '../form-data-source/form-data-source.service';
import { plainToInstance } from 'class-transformer';
import { Form } from '../../models/form.entity';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formDataSource: FormDataSourceService) { }

  fetchForms() {
    return this.formDataSource.fetchFormList().pipe(
      map(form => plainToInstance(Form, form)),
    )
  }
}
